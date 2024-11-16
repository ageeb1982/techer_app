import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="d-flex flex-column flex-root">
      <div class="page d-flex flex-row flex-column-fluid">
        <app-sidebar></app-sidebar>
        <div class="wrapper d-flex flex-column flex-row-fluid">
          <app-header></app-header>
          <div class="content d-flex flex-column flex-column-fluid">
            <div class="container-fluid">
              <ng-content></ng-content>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page { height: 100vh; }
    .wrapper { flex: 1; }
    .content { padding: 20px; }
  `]
})
export class LayoutComponent {}