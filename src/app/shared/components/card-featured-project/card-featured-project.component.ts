import {
  Component,
  input,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FeatureProject } from '../../../core/models/featureProject';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { PROJECT_CARD_CONSTANTS } from '../../../core/constants/project-card.constants';

@Component({
  selector: 'app-card-featured-project',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './card-featured-project.component.html',
  styleUrl: './card-featured-project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFeaturedProjectComponent {
  /**
   * Project data input using signal-based input (Angular 17+)
   * Required input with proper typing
   */
  project = input.required<FeatureProject>();

  /**
   * Computed signal for visible technologies (first N technologies)
   * Following DRY principle - single source of truth
   */
  readonly visibleTechnologies = computed(() => {
    const technologies = this.project().technologies;
    return technologies.slice(0, PROJECT_CARD_CONSTANTS.MAX_VISIBLE_TECHNOLOGIES);
  });

  /**
   * Computed signal for remaining technologies count
   * Used to display "+X more" badge
   */
  readonly remainingTechnologiesCount = computed(() => {
    const totalCount = this.project().technologies.length;
    const visibleCount = PROJECT_CARD_CONSTANTS.MAX_VISIBLE_TECHNOLOGIES;
    return totalCount > visibleCount ? totalCount - visibleCount : 0;
  });

  /**
   * Computed signal to determine if "more" badge should be displayed
   * Following KISS principle - simple boolean check
   */
  readonly shouldShowMoreBadge = computed(() => {
    return this.remainingTechnologiesCount() > 0;
  });

  /**
   * Placeholder array for loading skeleton
   * Following DRY principle - defined once, reused
   */
  readonly placeholderItems = Array.from(
    { length: PROJECT_CARD_CONSTANTS.MAX_VISIBLE_TECHNOLOGIES },
    (_, i) => i + 1
  );
}
