import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'profile', loadChildren: () => import('./modules/teacher/teacher.module').then(m => m.TeacherModule) }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    SharedModule,
    DashboardModule,
    TeacherModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }