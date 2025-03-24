import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Router importieren!

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {}

  onNavClick(link: string): void {
    console.log(`[DEBUG] Footer link clicked → Navigiere zu: ${link}`);

    if (['home', 'offers', 'testimonials', 'contact'].includes(link)) {
      // Scrollen zu Fragment auf der Startseite
      this.router.navigate(['/'], { fragment: link });
    } else {
      // Navigieren zu anderen Seiten
      this.router.navigate([`/${link}`]);
    }
  }
}
