import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: 'profile', component: TeacherProfileComponent },
  { path: 'dashboard', component: TeacherDashboardComponent }
];

@NgModule({
  declarations: [
    TeacherProfileComponent,
    TeacherDashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TeacherModule { }