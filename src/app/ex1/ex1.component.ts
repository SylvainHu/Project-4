import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UpperCasePipe} from '@angular/common';

import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-ex1',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, HeaderComponent],
  templateUrl: './ex1.component.html',
  styleUrl: './ex1.component.css'
})
export class Ex1Component {
  username = '';

  selectedFont = '';
  selectedFontSize = 30;
  alignment = 'left';
  alignLeft: boolean = false;
  alignCenter: boolean = false;
  alignRight: boolean = false;

  fontOptions = [
    { name: 'Times New Roman', fontFamily: 'Times New Roman, serif'},
    { name: 'Arial', fontFamily: 'Arial, sans-serif'},
    { name: 'Courier New', fontFamily: 'Courier New, monospace'},
    { name: 'Papyrus', fontFamily: 'Papyrus, fantasy'},
    { name: 'Brush Script MT', fontFamily: 'Brush Script MT, cursice'},
  ];

  updateAlignment(): void {
    if (this.alignLeft) {
      this.alignment = 'left';
    } else if (this.alignCenter) {
      this.alignment = 'center';
    } else if (this.alignRight) {
      this.alignment = 'right';
    } else {
      this.alignment = 'left'; // Default alignment if none is selected
    }
  };
}
