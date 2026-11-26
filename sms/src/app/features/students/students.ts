import { Component } from '@angular/core';
import { AddStudent, Student } from '../add-student/add-student';

@Component({
  imports: [AddStudent],
  selector: 'app-students',
  styleUrl: './students.css',
  templateUrl: './students.html',
})
export class Students {
  isAddFormOpen = false;
  searchTerm = '';
  statusFilter: 'All' | Student['status'] = 'All';
  gradeFilter = 'All';
  sortBy: 'name' | 'studentId' | 'grade' | 'enrollmentDate' = 'name';
  sortAscending = true;
  students: Student[] = [
    {
      id: 1,
      studentId: 'STU-2026-001',
      firstName: 'Ava',
      lastName: 'Patel',
      email: 'ava.patel@example.com',
      phone: '+1 555-0101',
      dateOfBirth: '2012-04-18',
      gender: 'Female',
      grade: '8',
      className: '8-A',
      guardianName: 'Riya Patel',
      guardianPhone: '+1 555-1101',
      enrollmentDate: '2024-08-15',
      status: 'Active',
      address: '125 Oak Street, Springfield',
    },
    {
      id: 2,
      studentId: 'STU-2026-002',
      firstName: 'Liam',
      lastName: 'Johnson',
      email: 'liam.johnson@example.com',
      phone: '+1 555-0102',
      dateOfBirth: '2011-11-02',
      gender: 'Male',
      grade: '9',
      className: '9-B',
      guardianName: 'Marcus Johnson',
      guardianPhone: '+1 555-1102',
      enrollmentDate: '2023-08-21',
      status: 'Active',
      address: '48 Pine Avenue, Springfield',
    },
    {
      id: 3,
      studentId: 'STU-2026-003',
      firstName: 'Mia',
      lastName: 'Chen',
      email: 'mia.chen@example.com',
      phone: '+1 555-0103',
      dateOfBirth: '2013-01-27',
      gender: 'Female',
      grade: '7',
      className: '7-A',
      guardianName: 'Wei Chen',
      guardianPhone: '+1 555-1103',
      enrollmentDate: '2025-08-18',
      status: 'Active',
      address: '302 Maple Road, Springfield',
    },
    {
      id: 4,
      studentId: 'STU-2026-004',
      firstName: 'Noah',
      lastName: 'Williams',
      email: 'noah.williams@example.com',
      phone: '+1 555-0104',
      dateOfBirth: '2010-06-09',
      gender: 'Male',
      grade: '10',
      className: '10-C',
      guardianName: 'Olivia Williams',
      guardianPhone: '+1 555-1104',
      enrollmentDate: '2022-08-22',
      status: 'Active',
      address: '17 Cedar Lane, Springfield',
    },
    {
      id: 5,
      studentId: 'STU-2026-005',
      firstName: 'Isabella',
      lastName: 'Garcia',
      email: 'isabella.garcia@example.com',
      phone: '+1 555-0105',
      dateOfBirth: '2012-09-14',
      gender: 'Female',
      grade: '8',
      className: '8-B',
      guardianName: 'Sofia Garcia',
      guardianPhone: '+1 555-1105',
      enrollmentDate: '2024-08-15',
      status: 'Active',
      address: '91 Birch Boulevard, Springfield',
    },
    {
      id: 6,
      studentId: 'STU-2026-006',
      firstName: 'Ethan',
      lastName: 'Brown',
      email: 'ethan.brown@example.com',
      phone: '+1 555-0106',
      dateOfBirth: '2011-03-30',
      gender: 'Male',
      grade: '9',
      className: '9-A',
      guardianName: 'James Brown',
      guardianPhone: '+1 555-1106',
      enrollmentDate: '2023-08-21',
      status: 'Inactive',
      address: '64 Willow Court, Springfield',
    },
    {
      id: 7,
      studentId: 'STU-2026-007',
      firstName: 'Amara',
      lastName: 'Okafor',
      email: 'amara.okafor@example.com',
      phone: '+1 555-0107',
      dateOfBirth: '2012-12-05',
      gender: 'Female',
      grade: '8',
      className: '8-A',
      guardianName: 'Chidi Okafor',
      guardianPhone: '+1 555-1107',
      enrollmentDate: '2024-08-15',
      status: 'Active',
      address: '208 Elm Street, Springfield',
    },
    {
      id: 8,
      studentId: 'STU-2026-008',
      firstName: 'Lucas',
      lastName: 'Martin',
      email: 'lucas.martin@example.com',
      phone: '+1 555-0108',
      dateOfBirth: '2010-08-22',
      gender: 'Male',
      grade: '10',
      className: '10-A',
      guardianName: 'Chloe Martin',
      guardianPhone: '+1 555-1108',
      enrollmentDate: '2022-08-22',
      status: 'Active',
      address: '53 Lakeview Drive, Springfield',
    },
    {
      id: 9,
      studentId: 'STU-2026-009',
      firstName: 'Sofia',
      lastName: 'Kim',
      email: 'sofia.kim@example.com',
      phone: '+1 555-0109',
      dateOfBirth: '2013-05-11',
      gender: 'Female',
      grade: '7',
      className: '7-B',
      guardianName: 'Daniel Kim',
      guardianPhone: '+1 555-1109',
      enrollmentDate: '2025-08-18',
      status: 'Active',
      address: '76 Meadow Way, Springfield',
    },
    {
      id: 10,
      studentId: 'STU-2026-010',
      firstName: 'Oliver',
      lastName: 'Thompson',
      email: 'oliver.thompson@example.com',
      phone: '+1 555-0110',
      dateOfBirth: '2011-07-16',
      gender: 'Male',
      grade: '9',
      className: '9-C',
      guardianName: 'Emma Thompson',
      guardianPhone: '+1 555-1110',
      enrollmentDate: '2023-08-21',
      status: 'Active',
      address: '11 River Road, Springfield',
    },
  ];

  addStudent(student: Student): void {
    this.students = [student, ...this.students];
    this.isAddFormOpen = false;
  }

  get grades(): string[] {
    const grades: string[] = [];

    for (const student of this.students) {
      if (!grades.includes(student.grade)) {
        grades.push(student.grade);
      }
    }

    return grades.sort((firstGrade, secondGrade) => Number(firstGrade) - Number(secondGrade));
  }

  get filteredStudents(): Student[] {
    const searchText = this.searchTerm.trim().toLowerCase();
    const matchingStudents: Student[] = [];

    for (const student of this.students) {
      const studentText =
        `${student.firstName} ${student.lastName} ${student.studentId} ${student.email} ${student.phone} ${student.guardianName}`.toLowerCase();
      const matchesSearch = searchText === '' || studentText.includes(searchText);
      const matchesStatus = this.statusFilter === 'All' || student.status === this.statusFilter;
      const matchesGrade = this.gradeFilter === 'All' || student.grade === this.gradeFilter;

      if (matchesSearch && matchesStatus && matchesGrade) {
        matchingStudents.push(student);
      }
    }

    matchingStudents.sort((firstStudent, secondStudent) => {
      const firstValue = this.getSortValue(firstStudent);
      const secondValue = this.getSortValue(secondStudent);
      const result = firstValue.localeCompare(secondValue, undefined, { numeric: true });

      if (this.sortAscending) {
        return result;
      }

      return -result;
    });

    return matchingStudents;
  }

  setSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  toggleSortDirection(): void {
    this.sortAscending = !this.sortAscending;
  }

  private getSortValue(student: Student): string {
    switch (this.sortBy) {
      case 'studentId':
        return student.studentId;
      case 'grade':
        return student.grade;
      case 'enrollmentDate':
        return student.enrollmentDate;
      default:
        return `${student.firstName} ${student.lastName}`;
    }
  }
}
