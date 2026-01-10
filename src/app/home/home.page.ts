import { Component } from '@angular/core';
import { IonContent, IonCard, IonItem, IonList, IonCardHeader, IonCardContent, IonButton, ModalController } from '@ionic/angular/standalone';
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonCard, IonItem, IonList, IonCardHeader, IonCardContent, IonButton],
})
export class HomePage {
  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) {}


  async clickMe() {
    // let dia = await this.modalCtrl.create({
    //   component: LoginPage
    // });

    // dia.present();
    this.router.navigate(['/main']); // navigate to main page
    
  }
}
