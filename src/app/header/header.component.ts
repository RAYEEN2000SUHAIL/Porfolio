import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mode: string = "light_mode";

  lightMode: boolean = true;


  changeMode(): void {
    if (this.mode == "light_mode") {
      this.mode = "Dark_mode";
      this.lightMode = false;
    } else {
      this.mode = "light_mode";
      this.lightMode = true;
    }
  }
}
