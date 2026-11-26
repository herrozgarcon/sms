import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  summaryCards = [
    { label: 'Total students', value: '10', detail: 'Across all grades', icon: '♙', color: 'blue' },
    {
      label: 'Active students',
      value: '9',
      detail: 'Currently enrolled',
      icon: '✓',
      color: 'green',
    },
    { label: 'Classes', value: '8', detail: 'Across 3 grades', icon: '▦', color: 'purple' },
    {
      label: 'Attendance today',
      value: '94%',
      detail: 'Illustrative sample',
      icon: '◷',
      color: 'orange',
    },
  ];

  gradeSummary = [
    { grade: 'Grade 7', count: 2, percentage: 20 },
    { grade: 'Grade 8', count: 3, percentage: 30 },
    { grade: 'Grade 9', count: 3, percentage: 30 },
    { grade: 'Grade 10', count: 2, percentage: 20 },
  ];

  recentStudents = [
    {
      name: 'Ava Patel',
      studentId: 'STU-2026-001',
      grade: 'Grade 8',
      className: '8-A',
      status: 'Active',
    },
    {
      name: 'Liam Johnson',
      studentId: 'STU-2026-002',
      grade: 'Grade 9',
      className: '9-B',
      status: 'Active',
    },
    {
      name: 'Mia Chen',
      studentId: 'STU-2026-003',
      grade: 'Grade 7',
      className: '7-A',
      status: 'Active',
    },
    {
      name: 'Ethan Brown',
      studentId: 'STU-2026-006',
      grade: 'Grade 9',
      className: '9-A',
      status: 'Inactive',
    },
  ];
}
