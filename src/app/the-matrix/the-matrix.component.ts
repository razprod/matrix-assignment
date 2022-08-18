import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'the-matrix',
  templateUrl: './the-matrix.component.html',
  styleUrls: ['./the-matrix.component.scss'],
})
export class TheMatrixComponent implements OnInit, OnDestroy {
  @Input() sum: number | null = 0;
  @Input() matrix: { val: number; id: number }[][] | null = null;

  constructor() {}

  ngOnInit(): void {}

  trackByIndex(index: number, value: { val: number; id: number }) {
    return value.id;
  }

  /**
   * @description Updates the cell's value.
   */
  setCell(x: number, y: number, event: Event): void | false {
    const target = <HTMLInputElement>event.target;
    const value = +target.value;
    const prev = this.matrix![x][y].val;
    this.matrix![x][y].val = value;
    if (!this.checkMatrixValid(x, y)) {
      this.matrix![x][y].val = prev;
      target.value = prev.toString();
    }
  }

  /**
   * @description Validates the matrix by the sum in the x & y axis also diagonally.
   */
  checkMatrixValid(x: number, y: number): boolean {
    if (!this.matrix || this.sum === null) return false;

    // Row sum
    let rowSum = 0;
    for (let i = 0; i < this.matrix[x].length; i++) {
      rowSum += this.matrix[x][i].val;
    }
    if (rowSum > this.sum) return false;
    console.log('ROW PASS');

    // Col sum
    let colSum = 0;
    for (let i = 0; i < this.matrix.length; i++) {
      colSum += this.matrix[i][y].val;
    }
    if (colSum > this.sum) return false;
    console.log('COL PASS');

    // Diag left up
    let diagLeftRight = this.matrix[x][y].val;
    let i = x - 1;
    let j = y - 1;
    while (i >= 0 && j >= 0) {
      diagLeftRight += this.matrix[i--][j--].val;
    }
    // Diagn right down
    i = x + 1;
    j = y + 1;
    while (i < this.matrix.length && j < this.matrix[x].length) {
      diagLeftRight += this.matrix[i++][j++].val;
    }
    if (diagLeftRight > this.sum) return false;

    // Diag right up
    let diagRightLeft = this.matrix[x][y].val;
    i = x - 1;
    j = y + 1;
    while (i >= 0 && j < this.matrix[x].length) {
      diagRightLeft += this.matrix[i--][j++].val;
    }
    // Diag left down
    i = x + 1;
    j = y - 1;
    while (i < this.matrix.length && j >= 0) {
      diagRightLeft += this.matrix[i++][j--].val;
    }
    if (diagRightLeft > this.sum) return false;

    return true;
  }

  ngOnDestroy(): void {}
}
