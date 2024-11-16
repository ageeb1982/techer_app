import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  template: `
    <div class="row g-5 g-xl-8">
      <div class="col-xl-3">
        <app-stat-card
          title="Total Students"
          value="150"
          icon="fas fa-users"
          trend="+12.5%"
          color="primary">
        </app-stat-card>
      </div>
      <div class="col-xl-3">
        <app-stat-card
          title="Classes Today"
          value="5"
          icon="fas fa-chalkboard"
          trend="Normal"
          color="success">
        </app-stat-card>
      </div>
      <div class="col-xl-3">
        <app-stat-card
          title="Assignments"
          value="12"
          icon="fas fa-tasks"
          trend="Pending"
          color="warning">
        </app-stat-card>
      </div>
      <div class="col-xl-3">
        <app-stat-card
          title="Average Score"
          value="85%"
          icon="fas fa-chart-line"
          trend="+5%"
          color="info">
        </app-stat-card>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-xl-6">
        <app-card title="Upcoming Classes">
          <table class="table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Subject</th>
                <th>Class</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00 AM</td>
                <td>Mathematics</td>
                <td>Grade 10-A</td>
                <td>Room 101</td>
              </tr>
              <tr>
                <td>11:00 AM</td>
                <td>Mathematics</td>
                <td>Grade 9-B</td>
                <td>Room 102</td>
              </tr>
            </tbody>
          </table>
        </app-card>
      </div>
      <div class="col-xl-6">
        <app-card title="Recent Activities">
          <div class="timeline">
            <div class="timeline-item mb-3">
              <div class="timeline-label fw-bold text-gray-800">08:42</div>
              <div class="timeline-content">
                <span class="text-muted">Submitted grades for Grade 10-A</span>
              </div>
            </div>
            <div class="timeline-item mb-3">
              <div class="timeline-label fw-bold text-gray-800">07:30</div>
              <div class="timeline-content">
                <span class="text-muted">Created new assignment for Grade 9-B</span>
              </div>
            </div>
          </div>
        </app-card>
      </div>
    </div>
  `
})
export class TeacherDashboardComponent {}