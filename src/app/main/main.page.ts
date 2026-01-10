import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GestureController, Gesture } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
IonIcon,IonRow, IonCol, IonGrid, IonTabBar, IonTabButton, IonImg, IonFooter,
IonMenu, IonButtons, IonMenuButton, IonCard,
IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {logoFacebook, logoLinkedin, navigate } from 'ionicons/icons';
import { EText, IMenu } from '../model';
import { ScreenService } from '../service/screen.service';
import { NavController } from '@ionic/angular';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [HeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem,
  IonRow, IonCol, IonGrid,  IonTabBar, IonTabButton, IonImg, IonFooter, IonMenu, IonButtons, IonMenuButton,
  IonLabel, IonButton, IonIcon, IonCard, FooterComponent]
})

export class MainPage implements OnInit {
  @ViewChild('box', { read: ElementRef }) box!: ElementRef;
  
  buttons: Array<IMenu> = [
    { id: 1, label: 'Home', route: '/home', selected: false },
    { id: 2, label: 'About', route: '/about', selected: false },
    { id: 3, label: 'Contact', route: '/contact', selected: false }
  ];
  rotation = 0;
  gesture!: Gesture;
  constructor(
    public screenSer: ScreenService,
    private navCtrl: NavController,
    private gestureCtrl: GestureController
  ) {
    addIcons({logoFacebook, logoLinkedin, navigate})
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('Box Element:', this.box);
    // this.createGesture();
  }

  createGesture() {
    this.gesture = this.gestureCtrl.create({
      el: this.box.nativeElement,
      gestureName: 'rotate-gesture',
       threshold: 0,
      onStart: ev => {
        console.log('Gesture started', ev.currentX);
        const rect = this.box.nativeElement.getBoundingClientRect();
        const middle = rect.left + rect.width / 2;

        if (ev.currentX < middle) {
          // LEFT side touch
          this.rotation -= 15;
        } else {
          // RIGHT side touch
          this.rotation += 15;
        }

        this.applyRotation();
      }
    });

    this.gesture.enable(true);
  }

//   onHover(event: MouseEvent) {
//   const rect = (event.target as HTMLElement).getBoundingClientRect();
//   const middle = rect.left + rect.width / 2;

//   if (event.clientX < middle) {
//     // hover left
//   } else {
//     // hover right
//   }
// }


  applyRotation() {
    this.box.nativeElement.style.transform = `rotate(${this.rotation}deg)`;
    console.log('Applied rotation:', this.rotation);
  }


  x = 0;
  y = 0;
  startX = 0;
  startY = 0;
  dragging = false;

  startDrag(event: PointerEvent) {
    this.dragging = true;

    const el = event.target as HTMLElement;

    // Keep receiving move events
    el.setPointerCapture(event.pointerId);

    // Save offset between mouse and image position
    this.startX = event.clientX - this.x;
    this.startY = event.clientY - this.y;
    }

  onDrag(event: PointerEvent) {
    if (!this.dragging) return;

    // Calculate new position
    this.x = event.clientX - this.startX;
    this.y = event.clientY - this.startY;
    
    // Move image
    const el = event.target as HTMLElement;
    el.style.cursor = 'grabbing';
    el.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  endDrag(event: PointerEvent) {
    this.dragging = false;
    // Release pointer
    const el = event.target as HTMLElement;
    el.releasePointerCapture(event.pointerId);
  }

 


  telegramClick() {
    let a = document.createElement('a');
    a.href = 'https://t.me/Minea_chan';
    a.target = '_blank';
    a.click();
  }

  facebookClick() {
    let a = document.createElement('a');
    a.href = 'https://www.facebook.com/chanminea.roeun.2025';
    a.target = '_blank';
    a.click();
  }

  linkedinClick() {
    let a = document.createElement('a');
    a.href = 'https://www.linkedin.com/in/chanminea-roeun-a4a879287';
    a.target = '_blank';
    a.click();
  }

}
