import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
IonIcon,IonRow, IonCol, IonGrid, IonTabBar, IonTabButton, IonImg, IonFooter,
IonMenu, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonProgressBar,
IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {logoFacebook, logoLinkedin, navigate } from 'ionicons/icons';
import { EText, IMenu } from '../model';
import { ScreenService } from '../service/screen.service';
import { NavController } from '@ionic/angular';
import { FooterComponent } from '../component/footer/footer.component';
import { HeaderComponent } from '../component/header/header.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem,
  IonRow, IonCol, IonGrid,  IonTabBar, IonTabButton, IonImg, IonFooter, IonMenu, IonButtons, IonMenuButton,
  IonLabel, IonButton, IonIcon, IonCard, FooterComponent, HeaderComponent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonProgressBar]
})
export class AboutPage implements OnInit {

   buttons: Array<IMenu> = [
      { id: 1, label: 'Home', route: '/home', selected: false },
      { id: 2, label: 'About', route: '/about', selected: false },
      { id: 3, label: 'Contact', route: '/contact', selected: false }
    ];
  
    constructor(
      public screenSer: ScreenService,
      private navCtrl: NavController
    ) {
      addIcons({logoFacebook, logoLinkedin, navigate})
    }
  
    EText = EText;
  
    ngOnInit() {
  
    }
  
  menuClick(menu: IMenu) {
    // set selected to false
    this.buttons.forEach(b => {
      b.selected = false;
    });
    menu.selected = true;
    if (menu.id === 2) {
      this.navCtrl.navigateForward('/about');
    } else if (menu.id === 3) {
      this.navCtrl.navigateForward('/contact');
    } else if (menu.id === 1) {
      this.navCtrl.navigateForward('/main');
    }
}
  

}
