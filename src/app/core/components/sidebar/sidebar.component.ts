import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="aside bg-white" id="kt_aside">
      <div class="aside-logo py-4 px-5">
        <h2 class="text-primary">Teacher Portal</h2>
      </div>
      <div class="aside-menu">
        <div class="menu-item">
          <a routerLink="/dashboard" routerLinkActive="active" class="menu-link">
            <i class="fas fa-home me-2"></i>
            <span>Dashboard</span>
          </a>
        </div>
        <div class="menu-item">
          <a routerLink="/profile" routerLinkActive="active" class="menu-link">
            <i class="fas fa-user me-2"></i>
            <span>Profile</span>
          </a>
        </div>
        <div class="menu-item">
          <a routerLink="/classes" routerLinkActive="active" class="menu-link">
            <i class="fas fa-chalkboard-teacher me-2"></i>
            <span>Classes</span>
          </a>
        </div>
        <div class="menu-item">
          <a routerLink="/schedule" routerLinkActive="active" class="menu-link">
            <i class="fas fa-calendar me-2"></i>
            <span>Schedule</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .aside {
      width: 265px;
      border-right: 1px solid #eff2f5;
    }
    .menu-item {
      padding: 0.5rem 1rem;
    }
    .menu-link {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      color: #181C32;
      text-decoration: none;
      border-radius: 0.475rem;
    }
    .menu-link:hover, .menu-link.active {
      background-color: #F5F8FA;
      color: #009EF7;
    }
  `]
})
export class SidebarComponent {}