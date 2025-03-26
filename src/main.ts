import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router'; // ✅ withHashLocation importiert!
import { routes } from './app/app.routes';       // ⬅️ Deine Routes importieren!
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),  // ✅ HashLocation aktiviert!
    ...appConfig.providers                      // ✅ Deine bestehenden Config-Provider bleiben erhalten.
  ]
})
.catch((err) => console.error(err));
