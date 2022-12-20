import { Api1Service } from './../../services/api1.service';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DispenserDetailComponent } from '../dispenser-detail/dispenser-detail.component';

@Component({
  selector: 'app-dispenser1',
  templateUrl: './dispenser1.component.html',
  styleUrls: ['./dispenser1.component.scss']
})
export class Dispenser1Component implements OnInit {
  title: any;
  //mendefinisikan variabel dispenser sbagai objek

  //membuat koleksi dispensers
  dispenser1s: any = [];
  constructor(
    public dialog: MatDialog,
    public api: Api1Service


  ) {
    //'Products' diganti 'Dispenser'
    this.title = 'DispenserA';
    //memperbarui variabel dispenser
    //memanggil fungsi getDispensers()
    this.getDispensersA();
  }
  ngOnInit(): void {
    this.title = 'DispenserA';
    this.getDispensersA();
  }


  //Membuat fungsi 
  loading: boolean;
  getDispensersA() {
    this.loading = true;
    this.api.get('dispenser1s').subscribe(result => {
      this.dispenser1s = result;
      this.loading = false;
    }, error => {
      this.loading = false;
      alert('Tidak dapat mengambil data');
    })
  }


  dispenserDetail(data: any, idx: number) {
    let dialog = this.dialog.open(DispenserDetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if (idx == -1) this.dispenser1s.push(res);
        //jika tidak maka perbarui data  
        else this.dispenser1s[idx] = res;
      }
    })
  }
  deleteDispenser1(idx: any) {
    var conf = confirm('Delete item?');
    if (conf)
      this.dispenser1s.splice(idx, 1);
  }

}



