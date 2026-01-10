import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
IonIcon,IonRow, IonCol, IonGrid, IonTabBar, IonTabButton, IonImg, IonFooter,
IonMenu, IonButtons, IonMenuButton, IonCard,
IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { ScreenService } from 'src/app/service/screen.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem,
  IonRow, IonCol, IonGrid,  IonTabBar, IonTabButton, IonImg, IonFooter, IonMenu, IonButtons, IonMenuButton,
  IonLabel, IonButton, IonIcon, IonCard ]
})
export class FooterComponent  implements OnInit {

  constructor(
    public screenSer: ScreenService
  ) { }

  ngOnInit() {}

}
