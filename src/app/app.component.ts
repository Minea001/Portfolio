import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { IMenu } from './model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, RouterLink, RouterLinkActive],
})
export class AppComponent {
  constructor() {}

  buttons: Array<IMenu> = [
    { id: 1, label: 'Home', route: '/main', selected: false },
    { id: 2, label: 'About', route: '/about', selected: false },
    { id: 3, label: 'Contact', route: '/contact', selected: false }
  ];

  ngOnInit() {
    this.menuClick(this.buttons[0]);
  }

  menuClick(menu: IMenu) {
    // set selected to false
    this.buttons.forEach(b => {
      b.selected = false;
    });
    menu.selected = true;
    console.log("Selected menu: ", menu);
  }
}
