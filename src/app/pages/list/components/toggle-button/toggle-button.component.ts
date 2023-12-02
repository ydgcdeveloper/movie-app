import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent {
  @Input() value: boolean = false;
  @Output() valueChange = new EventEmitter<boolean>();

  toggle() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
