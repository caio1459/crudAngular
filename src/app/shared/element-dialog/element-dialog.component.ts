import { PeriodicElement } from './../../views/home/home.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.css']
})
export class ElementDialogComponent {
  mudar!: boolean
  element!: PeriodicElement;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    if (this.data.position !== null) {
      this.mudar = true
    } else {
      this.mudar = false
    }
  }
}
