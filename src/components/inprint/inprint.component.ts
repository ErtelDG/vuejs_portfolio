import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inprint',
  templateUrl: './inprint.component.html',
  styleUrls: ['./inprint.component.scss'],
})
export class InprintComponent {
  imprintOpen = true;

  @Output() valueEmitter = new EventEmitter<boolean>();

  openCloseInprint() {
    this.imprintOpen ? (this.imprintOpen = false) : (this.imprintOpen = true);
    this.valueEmitter.emit(this.imprintOpen);
  }
}
