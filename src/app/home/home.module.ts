import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';



@NgModule({
  declarations: [
    MainDashboardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainDashboardComponent
  ]
})
export class HomeModule { }
