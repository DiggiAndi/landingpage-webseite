import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👉 WICHTIG für ngClass, ngIf usw.

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // 👉 Hier fügen wir das hinzu!
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // Menüstatus (auf oder zu)
  menuOpen: boolean = false;

  // Öffnen/Schließen des Menüs
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Menü schließen (z.B. bei Klick auf Link)
  closeMenu(): void {
    this.menuOpen = false;
  }

}
