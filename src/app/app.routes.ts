import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home.component';
import { ImpressumComponent } from './pages/impressum.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '' }
];
