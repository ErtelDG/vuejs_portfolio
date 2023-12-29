import { Component, Input, OnInit } from '@angular/core';
import { GlobalVarService } from '../global-var.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  constructor(private languageInput: GlobalVarService) {}

  ngOnInit(): void {}
  language = 'en';

  aboutMeText = {
    en: 'As a Full Stack Developer, I have experience in developing user-friendly and responsive websites and applications. My specialization is in modern technologies such as HTML, CSS, JavaScript, TypeScript, Vue.js, and Angular, as well as a solid understanding of Responsive Design and design implementation. My knowledge of these technologies allows me to develop complete web applications that meet my users needs and provide a great user experience. I also leverage proven frameworks and libraries to increase development efficiency and achieve higher code quality. In addition to my expertise in front-end development, I have also gained experience in the backend using Python and Django as frameworks. I also have knowledge in architecting and scaling business applications to ensure they have high availability and performance. By continuously learning and keeping my knowledge up to date, I am constantly improving my skills. As part of a team, I enjoy working and contributing my ideas and proposed solutions to achieve the best possible result.',
    de: 'Als Full Stack Developer verfüge ich über Erfahrung in der Entwicklung von benutzerfreundlichen und ansprechenden Webseiten und Anwendungen. Meine Spezialisierung liegt auf modernen Technologien wie HTML, CSS, JavaScript, TypeScript, Vue.js und Angular, sowie einem soliden Verständnis von Responsive Design und Designumsetzung. Durch meine Kenntnisse in diesen Technologien kann ich vollständige Webanwendungen entwickeln, die den Anforderungen meiner Anwender entsprechen und eine großartige Benutzererfahrung bieten. Dabei setze ich auch auf bewährte Frameworks und Bibliotheken, um die Entwicklungseffizienz zu steigern und eine höhere Codequalität zu erreichen. Neben meiner Expertise in Frontend-Entwicklung habe ich auch Erfahrung im Backend mit Python und Django als Framework gesammelt. Zudem verfüge ich über Kenntnisse in der Architektur und Skalierung von Business-Anwendungen, um sicherzustellen, dass sie eine hohe Verfügbarkeit und Leistung aufweisen. Durch kontinuierliches Lernen und Aufrechterhaltung meiner Kenntnisse auf dem neuesten Stand der Technik, verbessere ich stetig meine Fähigkeiten. Im Team arbeite ich gerne und trage meine Ideen und Lösungsvorschläge bei, um ein bestmögliches Ergebnis zu erzielen.',
  };

  // aboutMeTraining = {
  //   en: 'As an experienced manager in retail, I have completed an apprenticeship as a retail clerk and further training as a Professional of Trade and Commerce (CCI). In the course of my professional career, I have distinguished myself in further training with outstanding achievements and have received recognition for further training from the IHK as the best in the exam and the Hamburg Academy.',
  //   de: 'Als erfahrene Führungskraft im Einzelhandel verfüge ich über eine Ausbildung zum Kaufmann im Einzelhandel sowie eine Weiterbildung zum geprüften Handelsfachwirt. Im Laufe meiner beruflichen Laufbahn habe ich mich in Fortbildungen durch hervorragende Leistungen ausgezeichnet und Anerkennungen für Weiterbildung von der IHK als Prüfungsbester und der Hamburger Akademie erhalten.',
  // };

  // aboutMeQualification = {
  //   en: "With many years of experience as a food department manager and market manager, I have developed a diverse set of skills and knowledge in these roles. I have held the trainer's license for years and have trained and developed many young trainees in my career.",
  //   de: 'Jahrelange Erfahrungen habe ich als Warenbereichsleiter Lebensmittel, Marktleiter und als Vertriebsleiter.  Den Ausbilderschein besitze ich seit Jahren und habe in meiner Laufbahn viele junge Auszubildende ausgebildet und entwickelt.',
  // };

  // aboutMeIntroductionDev = {
  //   en: 'Enthusiastic about programming for years, I am interested in working in software development. When working as a software developer, I would like to have the opportunity to contribute my professional experience with a strong entrepreneurial mindset. I would like to develop creative ideas and concepts that go beyond conventional solutions and have a positive effect on the performance and efficiency of companies.',
  //   de: 'Von der Programmierung bin ich seit Jahren begeistert und möchten in der Softwareentwicklung tätig werden. In der Tätigkeit als Softwareentwickler möchte ich die Möglichkeit haben, meine berufliche Erfahrungen mit starker unternehmerischer Denkweise einzubringen. Kreative Ideen und Konzepte möchte ich entwickeln, die über die herkömmlichen Lösungen hinausgehen und sich positiv auf die Performance und Effizienz von Unternehmen auswirken.',
  // };

  // aboutMeImigrationsDev = {
  //   en: 'As a team player, I enjoy working in a team and helping others to reach their full potential. Looking for new ways to improve the company always I am to improve the company, I am convinced that creative IT solutions will make a valuable contribution.',
  //   de: 'Ich bin eine teamfähige Person, die gerne im Team arbeitet und anderen dabei hilft, ihr volles Potential zu entfalten. Stets bin ich auf der Suche nach neuen Möglichkeiten, um das Unternehmen zu verbessern und davon überzeugt, dass kreativen IT-Lösungen einen wertvollen Beitrag leisten werden.',
  // };

  personalThingEn = [
    'Experience in developing web and software applications using technologies such as HTML, CSS, TypeScript, and Firebase.',

    'Knowledge of using frameworks and libraries such as Angular, VueJS, Material Design, Tailwind CSS and Bootstrap.',

    'Good knowledge of using version control systems such as Git (GitHub).',

    'Experience using testing and debugging tools to ensure code quality and integrity.',

    'Ability to analyze and improve processes and procedures to increase efficiency and performance',

    'Good communication and negotiation skills to successfully work with different stakeholders and solve problems',

    // "With many years of experience as a food department manager and market manager, I have developed a diverse set of skills and knowledge in these roles. I have held the trainer's license for years and have trained and developed many young trainees in my career.",
    // 'Enthusiastic about programming for years, I am interested in working in software development. When working as a software developer, I would like to have the opportunity to contribute my professional experience with a strong entrepreneurial mindset. I would like to develop creative ideas and concepts that go beyond conventional solutions and have a positive effect on the performance and efficiency of companies.',
    // 'As a team player, I enjoy working in a team and helping others to reach their full potential. Looking for new ways to improve the company always I am to improve the company, I am convinced that creative IT solutions will make a valuable contribution.',
  ];

  // personalThingDe = [
  //   'Jahrelange Erfahrungen habe ich als Warenbereichsleiter Lebensmittel, Marktleiter und als Vertriebsleiter.  Den Ausbilderschein besitze ich seit Jahren und habe in meiner Laufbahn viele junge Auszubildende ausgebildet und entwickelt.',
  //   'Jahrelange Erfahrungen habe ich als Warenbereichsleiter Lebensmittel, Marktleiter und als Vertriebsleiter.  Den Ausbilderschein besitze ich seit Jahren und habe in meiner Laufbahn viele junge Auszubildende ausgebildet und entwickelt.',
  //   'Ich bin eine teamfähige Person, die gerne im Team arbeitet und anderen dabei hilft, ihr volles Potential zu entfalten. Stets bin ich auf der Suche nach neuen Möglichkeiten, um das Unternehmen zu verbessern und davon überzeugt, dass kreativen IT-Lösungen einen wertvollen Beitrag leisten werden.',
  // ];
}
