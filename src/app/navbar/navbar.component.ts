import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  open: string = "expand_circle_up";
  menu: boolean = true;

  openClose() {
    if (this.open == "expand_circle_up") {
      this.open = "expand_circle_down"
      this.menu = false

    } else {
      this.open = "expand_circle_up"
      this.menu = true
    }
  }
}
