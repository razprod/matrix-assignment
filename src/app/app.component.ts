import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * @description Represents the allowed sum of numbers accoridng to the instuctions of the assignment.
   */
  sum$ = new BehaviorSubject<number>(0);
  /**
   * @description The materix of numbers.
   */
  matrix$ = new BehaviorSubject<{ val: number; id: number }[][]>([]);

  constructor() {}
}
