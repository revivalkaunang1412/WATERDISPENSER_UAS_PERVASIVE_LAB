//product-detail diganti dengan dispenser-detail
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dispenser-detail',
  templateUrl: './dispenser-detail.component.html',
  styleUrls: ['./dispenser-detail.component.scss']
})
export class DispenserDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DispenserDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }
  saveData() {
    this.dialogRef.close(this.data);
  }

}
