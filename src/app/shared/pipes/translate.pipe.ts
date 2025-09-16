import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../core/services/language.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(private languageService: LanguageService) {}

  transform(key: string): string {
    return this.languageService.translate(key);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
