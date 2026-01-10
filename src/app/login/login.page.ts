import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonRow, IonGrid, IonCol, IonIcon,
  IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';     
import { personCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
// import { AuthService } from '../service/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRow, IonGrid, IonCol, IonIcon, 
    IonCard, IonCardHeader, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonInput, IonCardTitle
  ]
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(
    // private authService: AuthService
  ) { 
    addIcons({ personCircleOutline });
  }
  
  ngOnInit() {


  }

  async login() {
    console.log("Login");
    // try {
    //   const user = await this.authService.signup(this.email, this.password).toPromise();
    //   // Redirect to home page or dashboard on success
    //   if (user) {
    //     console.log('Sign up successful');
    //   }
    // } catch (err) {
    //   // Handle errors (e.g., display an alert)
    //   console.error(err);
    // }
    
  }
}
