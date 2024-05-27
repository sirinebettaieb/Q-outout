import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.scss'
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string = '';

  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia() {
    if (this.newOnomatopia.trim()) {
      this.sendOnomatopiaToParent.emit(this.newOnomatopia);
      this.newOnomatopia = '';
    }
  }

}
