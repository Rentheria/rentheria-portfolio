import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastService } from '../../../core/services/toast.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.css',
  imports: [ReactiveFormsModule, CommonModule, TranslatePipe],
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
        `${this.getFieldLabel('name')}: ${
          this.contactForm.value.name
        }\n${this.getFieldLabel('email')}: ${
          this.contactForm.value.email
        }\n\n${this.getFieldLabel('message')}:\n${
          this.contactForm.value.message
        }`
      );

      const mailtoUrl = `mailto:rentheria.dev@gmail.com?subject=${subject}&body=${body}`;

      window.open(mailtoUrl, '_blank');
      this.toastService.showSuccess('contact.form.success');

      this.resetForm();
      this.isSubmitting = false;
    } catch (error) {
      console.error('Error opening email client:', error);
      this.toastService.showError('contact.form.error');
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
        return `${this.getFieldLabel(
          fieldName
        )} ${'contact.form.validation.required'}`;
      }
      if (field.errors['email']) {
        return 'contact.form.validation.email';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldLabel(
          fieldName
        )} ${'contact.form.validation.minLength'} ${requiredLength} ${'contact.form.validation.characters'}`;
      }
      if (field.errors['maxlength']) {
        const maxLength = field.errors['maxlength'].requiredLength;
        return `${this.getFieldLabel(
          fieldName
        )} ${'contact.form.validation.maxLength'} ${maxLength} ${'contact.form.validation.characters'}`;
      }
    }
    return '';
  }

  getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'contact.form.fields.name',
      email: 'contact.form.fields.email',
      subject: 'contact.form.fields.subject',
      message: 'contact.form.fields.message',
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
