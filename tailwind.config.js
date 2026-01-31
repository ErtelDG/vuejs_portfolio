/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      fontFamily: {
         sans: ["Poppins"],
         serif: ["Poppins"],
         mono: ["Poppins"],
         display: ["Poppins"],
         body: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
      extend: {
         colors: {
            primary: "#141D2F",
            secondary: "#FF4747",
            tertiary: "#141D2F",
            menucoler: "#6A6F7B",
            // primary: "#696F7B",
            // secondary: "#FAFAFA",
            // tertiary: "#141d2f65",
            // menucoler: "#6A6F7B",
         },
         backgroundImage: {
            backgroundDarkgrey: "url('./src/assets/img/background.png')",
            custom_center_projects_left: "url('./src/assets/img/bg_images/bg_center_projects_left.png')",
            cusom_bg_center_projects_right: "url('./src/assets/img/bg_images/bg_center_projects_right.png')",
            custom_bg_img_person: "url('./src/assets/img/bg_images/bg_img_person.png')",
            custom_bg_left_footer: "url('./src/assets/img/bg_images/bg_left_footer.png')",
            custom_bg_left_top: "url('./src/assets/img/bg_images/bg_left_top.png')",
            cusom_bg_righ_top: "url('./src/assets/img/bg_images/bg_righ_top.png')",
         },
         width: {
            1024: "1024px",
            1140: "1140px",
            1280: "1280px",
         },
      },
      screens: {
         sm: "360px",
         // => @media (min-width: 360spx) { ... }

         md: "480px",
         // => @media (min-width: 480px) { ... }

         lg: "768px",
         // => @media (min-width: 768px) { ... }

         xl: "1024px",
         // => @media (min-width: 1024px) { ... }

         "2xl": "1200px",
         // => @media (min-width: 1200px) { ... }
      },
   },
   plugins: [],
};
