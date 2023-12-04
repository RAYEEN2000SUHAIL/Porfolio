import { Component } from '@angular/core';
import { project } from 'src/model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: project;
  show: boolean = true;
  project = [

    {
      title: "TicTacToe",
      image: '../../assets/TicTacToe.png',
      linke: 'https://celebrated-zuccutto-9d91a2.netlify.app/',
      code: 'https://github.com/RAYEEN2000SUHAIL/ticTacToe',
      info: 'A  Website made with HTML, CSS, and javascript'

    },
    {
      title: "Analog-Clock",
      image: '../../assets/AnalogClock.png',
      linke: 'https://reliable-sundae-de7187.netlify.app/',
      code: 'https://github.com/RAYEEN2000SUHAIL/Analog-clock',
      info: 'A  Website made with HTML, CSS, and javascript'

    },
    {
      title: "Portfolio",
      image: '../../assets/portfolio.png',
      linke: '../../index.html',
      code: '#',
      info: 'A  Website made with HTML, CSS, and javascript'

    },

    
  ]

  showButton() {
  this.show = false;
  }
  hideButton() {
    this.show = true;

  }
}
