import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title: any;
  //mendefinisikan variabel dispenser sbagai objek
  dispenser: any = {};
  constructor() {
    this.title = 'Products';
    //memperbarui variabel dispenser
    this.dispenser = {
      //title diganti date
      date: '9 Oktober',
      author: 'Farid Suryanto',
      publisher: 'Sunhouse Digital',
      year: 2020,
      isbn: '8298377474',
      price: 70000
    };
  }

  ngOnInit(): void {
  }

}
