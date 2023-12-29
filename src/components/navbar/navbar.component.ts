import { APP_BASE_HREF } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor() {}

  @Output() valueEmitter = new EventEmitter<boolean>();

  menuOpen = false;

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  openCloseMenu() {
    this.menuOpen ? (this.menuOpen = false) : (this.menuOpen = true);
    this.valueEmitter.emit(this.menuOpen);
  }

  goSection(section: string) {
    this.menuOpen = false;
    this.valueEmitter.emit(this.menuOpen);
  }
}
