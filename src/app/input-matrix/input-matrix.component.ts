import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'input-matrix',
  templateUrl: './input-matrix.component.html',
  styleUrls: ['./input-matrix.component.scss'],
})
export class InputMatrixComponent implements OnInit {
  x: number = 0;
  y: number = 0;
  sum: number = 0;

  @Input() sum$ = new BehaviorSubject<number>(0);
  @Input() matrix$ = new BehaviorSubject<{ val: number; id: number }[][]>([]);

  constructor() {}

  ngOnInit(): void {}

  /**
   * @description initialize the matrix with the given length
   */
  setMatrix(): void {
    if (this.x > 0 && this.y > 0 && this.sum >= 0) {
      this.sum$.next(this.sum);
      let c = 0;
      const arr = new Array(this.x).fill([]).map((row) => {
        return new Array(this.y).fill([]).map((cell) => {
          return {
            val: 0,
            id: c++,
          };
        });
      });
      this.matrix$.next(arr);
    }
  }
}
