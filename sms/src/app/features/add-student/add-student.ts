import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface Student {
  id: number;
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'Female' | 'Male' | 'Non-binary';
  grade: string;
  className: string;
  guardianName: string;
  guardianPhone: string;
  enrollmentDate: string;
  status: 'Active' | 'Inactive';
  address: string;
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-add-student',
  styleUrl: './add-student.css',
  templateUrl: './add-student.html',
})
export class AddStudent {
  private readonly formBuilder = inject(FormBuilder);

  @Output() studentAdded = new EventEmitter<Student>();
  @Output() cancelled = new EventEmitter<void>();

  studentForm = this.formBuilder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    gender: ['Female' as Student['gender'], Validators.required],
    grade: ['', Validators.required],
    className: ['', Validators.required],
    guardianName: ['', Validators.required],
    guardianPhone: ['', Validators.required],
    enrollmentDate: ['', Validators.required],
    status: ['Active' as Student['status'], Validators.required],
    address: ['', Validators.required],
  });

  submit(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }
    const id = Date.now();
    this.studentAdded.emit({
      ...this.studentForm.getRawValue(),
      id,
      studentId: `STU-${new Date().getFullYear()}-${String(id).slice(-3)}`,
    });
  }
}
