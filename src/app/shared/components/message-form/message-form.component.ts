import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.css',
  imports: [ReactiveFormsModule, CommonModule],
})
export class MessageFormComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  private toastService = inject(ToastService);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      subject: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.isSubmitting || this.contactForm.invalid) return;

    this.isSubmitting = true;

    try {
      const subject = encodeURIComponent(this.contactForm.value.subject);
      const body = encodeURIComponent(
        `Name: ${this.contactForm.value.name}\nEmail: ${this.contactForm.value.email}\n\nMessage:\n${this.contactForm.value.message}`
      );

      const mailtoUrl = `mailto:manuel.rentheria@gmail.com?subject=${subject}&body=${body}`;

      window.open(mailtoUrl, '_blank');
      this.toastService.showSuccess(
        'Email client opened! Please send the message from your email client.'
      );

      this.resetForm();
      this.isSubmitting = false;
    } catch (error) {
      console.error('Error opening email client:', error);
      this.toastService.showError(
        'Failed to open email client. Please try again.'
      );
      this.isSubmitting = false;
    }
  }

  resetForm() {
    this.contactForm.reset();
  }

  // Helper methods for template
  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldLabel(
          fieldName
        )} must be at least ${requiredLength} characters`;
      }
      if (field.errors['maxlength']) {
        const maxLength = field.errors['maxlength'].requiredLength;
        return `${this.getFieldLabel(
          fieldName
        )} must not exceed ${maxLength} characters`;
      }
    }
    return '';
  }

  getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
    };
    return labels[fieldName] || fieldName;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.valid && field?.touched);
  }
}
