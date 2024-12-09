import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
    MainDashboardComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainDashboardComponent,
  ],
})
export class HomeModule {}
