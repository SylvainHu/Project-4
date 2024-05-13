import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  currentDateTime: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    // Update date and time every second
    interval(1000).subscribe(() => {
      this.currentDateTime = new Date();
    });
  }

}
