import { MaterialDesign } from './../material/material';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { ProductComponent } from './product/product.component'
import { FormsModule } from '@angular/forms';
import { Dispenser1Component } from './dispenser1/dispenser1.component';
import { Dispenser2Component } from './dispenser2/dispenser2.component';
import { DispenserDetailComponent } from './dispenser-detail/dispenser-detail.component';



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      //pengaturan router untuk halaman product
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/dashboard'
      },
      {
        path: 'images',
        component: ImagesComponent
      },
      {
        path: 'dispenser1',
        component: Dispenser1Component
      },
      {
        path: 'dispenser2',
        component: Dispenser2Component
      },
      {
        path: 'dispenser-detail',
        component: DispenserDetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ImagesComponent,
    ProductComponent,
    Dispenser1Component,
    Dispenser2Component,
    DispenserDetailComponent

  ],
  entryComponents: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
