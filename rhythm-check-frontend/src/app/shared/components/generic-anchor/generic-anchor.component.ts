import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-generic-anchor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './generic-anchor.component.html',
  styleUrls: ['./generic-anchor.component.scss']
})
export class GenericAnchorComponent {
  @Input() label: string = '';
  @Input() url: string = '';
  @Input() icon?: string;
  @Input() target: '_self' | '_blank' = '_self';
  @Input() className: string = '';
  @Input() isInternal: boolean = false;
}
