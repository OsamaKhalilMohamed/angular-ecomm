import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `<button
    class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
    (click)="handleButtonClicked()"
  >
    {{ label() || 'Check out!' }}
  </button>`,
  styles: ``,
})
export class PrimaryButton {
  label = input('');

  btnClicked = output();

  handleButtonClicked() {
    this.btnClicked.emit();
  }
}
