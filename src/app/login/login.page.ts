import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';
// import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule, 
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  ],
})
export class LoginPage {
  email = '';
  password = '';
  isLoginMode = true;

  // private auth = inject(Auth); // Commented out for demo mode
  private router = inject(Router);

  async onSubmit() {
    try {
      // Basic validation
      if (!this.email || !this.password) {
        alert('Please fill in all fields');
        return;
      }

      // Demo mode - uncomment the lines below to enable Firebase authentication
      // if (this.isLoginMode) {
      //   console.log('Attempting login with:', this.email);
      //   await signInWithEmailAndPassword(this.auth, this.email, this.password);
      //   console.log('Login successful');
      // } else {
      //   console.log('Attempting signup with:', this.email);
      //   await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      //   console.log('Signup successful');
      // }
      
      // Demo mode - simulate successful authentication
      console.log(`${this.isLoginMode ? 'Login' : 'Signup'} successful for:`, this.email);
      alert(`${this.isLoginMode ? 'Login' : 'Signup'} successful! (Demo mode)`);
      this.router.navigateByUrl('/email');
      
    } catch (err: any) {
      console.error('Authentication error:', err);
      alert(`Error: ${err.message}`);
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}