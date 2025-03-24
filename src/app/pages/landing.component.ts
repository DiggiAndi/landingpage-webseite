import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero.component';
import { OffersComponent } from '../components/offers.component';
import { TestimonialsComponent } from '../components/testimonials.component';
import { ContactComponent } from '../components/contact.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    OffersComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-offers></app-offers>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
  `
})
export class LandingComponent { }
