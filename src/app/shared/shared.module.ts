import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';

@NgModule({
  declarations: [
    CardComponent,
    StatCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    StatCardComponent
  ]
})
export class SharedModule { }