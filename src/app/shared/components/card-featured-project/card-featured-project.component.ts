import { Component, Input } from '@angular/core';
import { FeatureProject } from '../../../core/models/featureProject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-featured-project',
  imports: [CommonModule],
  templateUrl: './card-featured-project.component.html',
  styleUrl: './card-featured-project.component.css',
})
export class CardFeaturedProjectComponent {
  @Input() project!: FeatureProject;
}
