import { Api2Service } from './../../services/api2.service';

import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DispenserDetailComponent } from '../dispenser-detail/dispenser-detail.component';

@Component({
  selector: 'app-dispenser2',
  templateUrl: './dispenser2.component.html',
  styleUrls: ['./dispenser2.component.scss']
})
export class Dispenser2Component implements OnInit {
  title: any;
  //mendefinisikan variabel dispenser sbagai objek
  dispenser_2: any = {};
  dispensers_2: any = [];
  constructor(
    public dialog: MatDialog,
    public api: Api2Service

  ) {
    //'Products' diganti 'Dispenser'
    this.title = 'DispenserB';
    //memperbarui variabel dispenser
    //memanggil fungsi getDispensers()
    this.getDispensersB();
  }
  ngOnInit(): void {
    console.log(this.api.get());
  }
  //Membuat fungsi 
  getDispensersB() {
    this.dispensers_2 = [
      {
        //title diganti date
        date: '20 Oktober | 05:30 WIB',
        //author itu adalah water height
        water_height: '15 cm',
        //publisher: 'Sunhouse Digital',
        //year: 2020,
        //isbn: '8298377474',
        //price: 70000
      },
      {
        //title diganti date
        date: '15 Oktober | 05:20 WIB',
        //author diganti water_height
        water_height: '17 cm',
        //publisher: 'Sunhouse Digital',
        //year: 2020,
        //isbn: '8298377474',
        //price: 70000
      }
    ];
  }

  dispenserDetail(data: any, idx: number) {
    let dialog = this.dialog.open(DispenserDetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if (idx == -1) this.dispensers_2.push(res);
        //jika tidak maka perbarui data  
        else this.dispensers_2[idx] = res;
      }
    })
  }
  deleteDispenser2(idx: any) {
    var conf = confirm('Delete item?');
    if (conf)
      this.dispensers_2.splice(idx, 1);
  }

}
