import { Component, input } from '@angular/core';

type ContainerVariant = 'normal' | 'wide' | 'narrow';

@Component({
  selector: 'app-container',
  templateUrl: './container.html',
  styleUrl: './container.scss'
})
export class Container {
  variant = input<ContainerVariant>('normal');
}