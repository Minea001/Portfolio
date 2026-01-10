import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonGrid, IonRow,IonIcon,
 IonCol, IonImg, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';
import { ScreenService } from '../service/screen.service';
import { addIcons } from 'ionicons';
import { cloudDownloadOutline, downloadOutline, eyeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, FooterComponent, IonCard, IonCardHeader, IonCardContent,
    IonGrid, IonRow, IonCol, IonImg, IonButton, IonIcon
  ]
})
export class ContactPage implements OnInit {

  constructor(
    public screenSer: ScreenService
  ) {
    addIcons({
      eyeOutline, cloudDownloadOutline
    })
   }

  ngOnInit() {
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/documents/Chanminea_Roeun.pdf';
    link.download = 'Chanminea_Roeun_CV.pdf';
    link.click();
  }

  viewCV() {
    const link = document.createElement('a');
    // Link from Canva CV view
    link.href = 'https://www.canva.com/design/DAG9_PeFkCY/13FIIimyyRxhFwqFFFsJDA/view?utm_content=DAG9_PeFkCY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5c7d298649';
    link.target = '_blank';
    link.click();
  }
}
