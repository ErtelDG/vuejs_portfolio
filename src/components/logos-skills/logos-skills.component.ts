import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos-skills',
  templateUrl: './logos-skills.component.html',
  styleUrls: ['./logos-skills.component.scss'],
})
export class LogosSkillsComponent implements OnInit {
  ngOnInit(): void {}
  iconsSkills = [
    'Angular',
    'CSS',
    'Databases',
    'Django',
    'Docker',
    'Firebase',
    'GIT',
    'HTML',
    'JS',
    'Linux',
    'MaterialDesign',
    'Python',
    'RELEX',
    'Rest-API',
    'Scrum',
    'SQL',
    'Tailwind',
    'TS',
    'VueJS',
    'VM',
    'WordPress',
  ];
}
