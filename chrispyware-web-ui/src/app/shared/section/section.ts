import { Component, input } from '@angular/core';

type SectionVariant = 'default' | 'subtle' | 'accent';

@Component({
  selector: 'app-section',
  templateUrl: './section.html',
  styleUrl: './section.scss'
})
export class Section {
  variant = input<SectionVariant>('default');
}