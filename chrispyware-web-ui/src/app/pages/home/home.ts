import { Component } from '@angular/core';

import { Section } from '../../shared/section/section';
import { Container } from '../../shared/container/container';
import { Hero } from '../../features/home/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Section, Container, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}