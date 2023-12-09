import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuhailJaved';
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
