import { Component, Input } from '@angular/core';
import { FeatureProject } from '../../../core/models/featureProject';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-card-featured-project',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './card-featured-project.component.html',
  styleUrl: './card-featured-project.component.css',
})
export class CardFeaturedProjectComponent {
  @Input() project!: FeatureProject;
}
