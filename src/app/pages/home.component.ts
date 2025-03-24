import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Inhalt-Komponenten importieren
import { HeroComponent } from '../components/hero.component';
import { OffersComponent } from '../components/offers.component';
import { TestimonialsComponent } from '../components/testimonials.component';
import { ContactComponent } from '../components/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero></app-hero>
    <app-offers></app-offers>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
  `,
  imports: [
    CommonModule,
    HeroComponent,
    OffersComponent,
    TestimonialsComponent,
    ContactComponent
  ]
})
export class HomeComponent {}
