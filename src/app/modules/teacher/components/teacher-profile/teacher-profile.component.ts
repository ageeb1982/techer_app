import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-profile',
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Teacher Profile</h3>
      </div>
      <div class="card-body">
        <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
          <div class="mb-3">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-control" formControlName="fullName">
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" formControlName="email">
          </div>
          <div class="mb-3">
            <label class="form-label">Subject</label>
            <input type="text" class="form-control" formControlName="subject">
          </div>
          <div class="mb-3">
            <label class="form-label">Phone</label>
            <input type="tel" class="form-control" formControlName="phone">
          </div>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
      </div>
    </div>
  `
})
export class TeacherProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Load teacher data
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}