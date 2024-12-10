import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
  ],
  exports: [
    MainDashboardComponent,
  ],
})
export class HomeModule {}
