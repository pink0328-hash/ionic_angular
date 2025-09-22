import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
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