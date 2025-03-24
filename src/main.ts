import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // ⬅️ Router hinzufügen!
import { routes } from './app/app.routes';       // ⬅️ Deine Routes importieren!
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // ⬅️ Hier wird das Routing aktiviert!
    ...appConfig.providers  // ⬅️ Deine bestehenden Config-Provider bleiben erhalten.
  ]
})
  .catch((err) => console.error(err));
