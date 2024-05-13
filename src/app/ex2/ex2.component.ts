import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

import { Operation } from '../operation';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-ex2',
  standalone: true,
  imports: [FormsModule, DatePipe, HeaderComponent],
  templateUrl: './ex2.component.html',
  styleUrl: './ex2.component.css'
})

export class Ex2Component {
  operand1: number = 0;
  operand2: number = 0;
  operator: string = 'add';
  result: number | null = null;
  lastOperation: number = 0;
  operations: Operation[] = [];

  calculate(): void {
    switch (this.operator) {
      case '+':
        this.result = this.operand1 + this.operand2;
        break;
      case '-':
        this.result = this.operand1 - this.operand2;
        break;
      case '*':
        this.result = this.operand1 * this.operand2;
        break;
      case '/':
        this.result = this.operand2 !== 0 ? this.operand1 / this.operand2 : null;
        break;
      default:
        this.result = null;
        break;
    }

    if (this.result !== null) {
      const operation: Operation = {
        time: new Date(),
        operation: `${this.operand1} ${this.operator} ${this.operand2}`,
        result: this.result
      };

      this.operations.push(operation);

      const previousIndex = this.operations.length - 2;
      if (previousIndex >= 0 ) {
        this.lastOperation = this.operations[previousIndex].result;
      }
    }
  }

  removeOperation(operation: Operation): void {
    const index = this.operations.indexOf(operation);
    if (index !== -1) {
      this.operations.splice(index, 1);
    }
  }
}
