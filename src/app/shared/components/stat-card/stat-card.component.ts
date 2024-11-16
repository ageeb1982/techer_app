import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  template: `
    <div class="card">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div class="symbol symbol-50px me-5">
            <span [class]="'symbol-label bg-light-' + color">
              <i [class]="icon + ' text-' + color + ' fs-2x'"></i>
            </span>
          </div>
          <div class="flex-grow-1">
            <div class="text-muted fw-bold fs-6">{{ title }}</div>
            <div class="fw-bolder fs-2">{{ value }}</div>
          </div>
        </div>
        <div class="pt-3">
          <span [class]="'badge badge-light-' + color">{{ trend }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .symbol {
      display: inline-block;
      flex-shrink: 0;
      position: relative;
      border-radius: 0.475rem;
    }
    .symbol-label {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.475rem;
    }
  `]
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';
  @Input() trend: string = '';
  @Input() color: string = 'primary';
}