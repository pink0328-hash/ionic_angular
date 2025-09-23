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
  IonTextarea,
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
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
    IonTextarea,
    IonButton
  ],
})
export class EmailPage {
  subject = '';
  message = '';

  onSend() {
    console.log('Email sent:', { subject: this.subject, message: this.message });
    alert('Email sent (demo only)!');
    this.subject = '';
    this.message = '';
  }
}