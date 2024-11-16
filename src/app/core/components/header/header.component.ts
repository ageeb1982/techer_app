import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header py-3">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <button class="btn btn-icon btn-light me-3">
            <i class="fas fa-bars"></i>
          </button>
          <h4 class="mb-0">Welcome, Teacher!</h4>
        </div>
        <div class="d-flex align-items-center">
          <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="profileDropdown" data-bs-toggle="dropdown">
              <i class="fas fa-user-circle me-2"></i>
              <span>Profile</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .header {
      background-color: #fff;
      border-bottom: 1px solid #eff2f5;
    }
    .btn-light {
      background-color: #F5F8FA;
      border: none;
    }
    .btn-light:hover {
      background-color: #E1F0FF;
    }
  `]
})
export class HeaderComponent {}