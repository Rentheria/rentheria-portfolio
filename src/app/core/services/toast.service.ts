import { Injectable, signal, computed } from '@angular/core';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toasts = signal<ToastMessage[]>([]);

  // Public readonly signal
  toasts = this._toasts.asReadonly();

  // Computed signal for the latest toast
  latestToast = computed(() => {
    const toasts = this._toasts();
    return toasts.length > 0 ? toasts[toasts.length - 1] : null;
  });

  showSuccess(message: string, duration: number = 5000) {
    this.addToast({
      id: this.generateId(),
      message,
      type: 'success',
      duration,
    });
  }

  showError(message: string, duration: number = 5000) {
    this.addToast({
      id: this.generateId(),
      message,
      type: 'error',
      duration,
    });
  }

  showInfo(message: string, duration: number = 5000) {
    this.addToast({
      id: this.generateId(),
      message,
      type: 'info',
      duration,
    });
  }

  showWarning(message: string, duration: number = 5000) {
    this.addToast({
      id: this.generateId(),
      message,
      type: 'warning',
      duration,
    });
  }

  private addToast(toast: ToastMessage) {
    this._toasts.update((toasts) => [...toasts, toast]);

    // Auto-remove after duration
    if (toast.duration && toast.duration > 0) {
      setTimeout(() => {
        this.removeToast(toast.id);
      }, toast.duration);
    }
  }

  removeToast(id: string) {
    this._toasts.update((toasts) => toasts.filter((toast) => toast.id !== id));
  }

  clearAll() {
    this._toasts.set([]);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
