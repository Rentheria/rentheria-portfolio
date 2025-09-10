import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ToastService,
  ToastMessage,
} from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <div class="fixed top-4 right-4 z-[1000] space-y-2">
      <div
        *ngFor="let toast of toasts(); trackBy: trackByToastId"
        class="transform transition-all duration-300 ease-in-out"
        [class.translate-x-0]="true"
        [class.opacity-100]="true"
        [class.scale-100]="true"
      >
        <div
          class="toast-content px-6 py-4 rounded-lg shadow-lg max-w-sm"
          [class.bg-green-600]="toast.type === 'success'"
          [class.bg-red-600]="toast.type === 'error'"
          [class.bg-blue-600]="toast.type === 'info'"
          [class.bg-yellow-600]="toast.type === 'warning'"
        >
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <i
                *ngIf="toast.type === 'success'"
                class="fas fa-check-circle text-white text-xl"
              ></i>
              <i
                *ngIf="toast.type === 'error'"
                class="fas fa-exclamation-circle text-white text-xl"
              ></i>
              <i
                *ngIf="toast.type === 'info'"
                class="fas fa-info-circle text-white text-xl"
              ></i>
              <i
                *ngIf="toast.type === 'warning'"
                class="fas fa-exclamation-triangle text-white text-xl"
              ></i>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-white">
                {{ toast.message }}
              </p>
            </div>
            <div class="ml-auto pl-3">
              <button
                (click)="removeToast(toast.id)"
                class="inline-flex text-white hover:text-gray-200 focus:outline-none"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [CommonModule],
  standalone: true,
})
export class ToastComponent {
  private toastService = inject(ToastService);

  toasts = this.toastService.toasts;

  removeToast(id: string) {
    this.toastService.removeToast(id);
  }

  trackByToastId(index: number, toast: ToastMessage): string {
    return toast.id;
  }
}
