import { Component, OnInit } from '@angular/core';
import { EText, IMenu } from 'src/app/model';
import { ScreenService } from 'src/app/service/screen.service';
import { NavController } from '@ionic/angular';
// import { addIcons } from 'ionicons/dist/types/components/icon/utils';
import { logoFacebook, logoLinkedin, navigate } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar,
IonIcon,IonRow, IonCol, IonGrid, IonTabBar, IonTabButton, IonImg, IonFooter,
IonMenu, IonButtons, IonMenuButton, IonCard,
IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem,
    IonRow, IonCol, IonGrid,  IonTabBar, IonTabButton, IonImg, IonFooter, IonMenu, IonButtons, IonMenuButton,
    IonLabel, IonButton, IonIcon, IonCard, IonFooter, RouterLink, RouterLinkActive ]
  })
export class HeaderComponent  implements OnInit {

  buttons: Array<IMenu> = [
    { id: 1, label: 'Home', route: '/main', selected: false },
    { id: 2, label: 'About', route: '/about', selected: false },
    { id: 3, label: 'Contact', route: '/contact', selected: false }
  ];

  constructor(
    public screenSer: ScreenService,
    private navCtrl: NavController
  ) {
    // addIcons({logoFacebook, logoLinkedin, navigate})
   }
  
  EText = EText;

  ngOnInit() {
    console.log("buttons: ", this.buttons);
  }

  menuClick(menu: IMenu) {
    // set selected to false
    this.buttons.forEach(b => {
      b.selected = false;
    });
    menu.selected = true;

    // if (menu.id === 2) {
    //   this.navCtrl.navigateForward('/about');
    // } else if (menu.id === 3) {
    //   this.navCtrl.navigateForward('/contact');
    // } else if (menu.id === 1) {
    //   this.navCtrl.navigateForward('/main');
    // }
  }
}
