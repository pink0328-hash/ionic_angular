import { Component } from '@angular/core';
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
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
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

  constructor(private auth: Auth, private router: Router) {}

  async onSubmit() {
    try {
      if (this.isLoginMode) {
        console.log('@@@', this.email, this.password);
        await signInWithEmailAndPassword(this.auth, this.email, this.password);
      } else {
        await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      }
      this.router.navigateByUrl('/email');
    } catch (err: any) {
      alert(err.message);
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}