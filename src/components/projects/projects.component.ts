import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      imageName: 'Pokedex',
      projectName: 'Pokedex',
      tools: 'HTML',
      toolsOther: ['TypeScript', 'Tailwind', 'Rest-API'],
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      linkLiveTest: 'https://dennisgeorgertel.com/projects/pokedex/index.html',
      linkGitHub: 'https://github.com/ErtelDG/pokedex',
    },
    {
      imageName: 'Sharkie',
      projectName: 'Sharkie',
      tools: ['HTML'],
      toolsOther: ['TypeScript', 'Tailwind'],
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale',
      linkLiveTest: 'https://dennisgeorgertel.com/projects/sharkie/index.html',
      linkGitHub: 'https://github.com/ErtelDG/sharkie',
    },

    {
      imageName: 'Join',
      projectName: 'Join',
      tools: ['CSS'],
      toolsOther: ['TypeScript', 'HTML'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      linkLiveTest:
        'https://dennisgeorgertel.com/projects/join/loginLogout/index.html',
      linkGitHub: 'https://github.com/ErtelDG/Join',
    },
    {
      imageName: 'EL_Pollo_Loco',
      projectName: 'EL Pollo Loco',
      tools: ['HTML'],
      toolsOther: ['TypeScript', 'Tailwind'],
      description:
        'And another jump and run game based on an object-oriented approach. Help Pepe find coins and bottles to fight the final boss.',
      linkLiveTest:
        'https://dennisgeorgertel.com/projects/el_pollo_loco/index.html',
      linkGitHub: 'https://github.com/ErtelDG/el_pollo-loco',
    },
  ];
}
