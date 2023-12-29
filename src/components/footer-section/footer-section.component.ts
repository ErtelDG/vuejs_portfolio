import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent {
  constructor() {}

  @Output() valueEmitter = new EventEmitter<boolean>();

  imprintOpen = false;

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  openCloseInprint() {
    this.imprintOpen ? (this.imprintOpen = false) : (this.imprintOpen = true);
    this.valueEmitter.emit(this.imprintOpen);
  }
}
