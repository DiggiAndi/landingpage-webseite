import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ngForm & ngModel
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../environments/environment'; // ✅ Import für Keys

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // ✅ Menü-Status
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // ✅ Formular-Daten
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // ✅ Status-Flags
  isLoading = false;
  successMessage = false;

  // ✅ Snackbar-Variablen
  snackbarMessage: string = '';
  snackbarType: 'success' | 'error' = 'success';
  showSnackbarFlag = false;

  // ✅ Formular absenden
  sendEmail(event: Event): void {
    event.preventDefault();

    this.isLoading = true;

    emailjs.send(
      environment.emailJsServiceId,   // ✅ Aus environment.ts
      environment.emailJsTemplateId,  // ✅ Aus environment.ts
      {
        from_name: this.formData.name,
        reply_to: this.formData.email,
        message: this.formData.message
      },
      environment.emailJsUserId        // ✅ Aus environment.ts
    )
    .then((result: EmailJSResponseStatus) => {
      console.log('✅ Nachricht gesendet:', result.status, result.text);
      this.showSnackbar('Deine Nachricht wurde gesendet!', 'success');

      // Reset Formular
      this.successMessage = true;
      this.formData = { name: '', email: '', message: '' };
    })
    .catch((error) => {
      console.error('❌ Fehler beim Senden:', error);
      this.showSnackbar('Fehler! Bitte versuche es später nochmal.', 'error');
    })
    .finally(() => {
      this.isLoading = false;
      if (this.successMessage) {
        setTimeout(() => {
          this.successMessage = false;
        }, 5000);
      }
    });
  }

  // ✅ Snackbar anzeigen
  showSnackbar(message: string, type: 'success' | 'error') {
    this.snackbarMessage = message;
    this.snackbarType = type;
    this.showSnackbarFlag = true;

    setTimeout(() => {
      this.showSnackbarFlag = false;
    }, 4000);
  }

  // ✅ Snackbar schließen (Button)
  closeSnackbar() {
    this.showSnackbarFlag = false;
  }

}
