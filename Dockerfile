FROM node:20-alpine AS build

WORKDIR /app

# Dependencies zuerst (Cache!)
COPY package*.json ./
RUN npm ci

# Projektdateien kopieren
COPY . .

# Vue/Vite Build
RUN npm run build


FROM nginx:alpine

# Default Nginx Config entfernen
RUN rm /etc/nginx/conf.d/default.conf

# Eigene Nginx Config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Gebaute Dateien kopieren
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
