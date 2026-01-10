import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  size = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,

    sm_down: false,
    sm_up: false,
    md_up: false,
    md_down: false,
    lg_up: false,
    lg_down: false
  }
  constructor(public pl: Platform) { 
    this.listenToResize();
  }
  private listenToResize() {
    this.resetScreenSize();
    this.pl.resize.subscribe(() => {
      this.resetScreenSize();
    });
  }
  
  private resetScreenSize() {
    this.size.xs = false;
    this.size.sm = false;
    this.size.md = false;
    this.size.lg = false;
    this.size.xl = false;
    this.size.sm_down = false;
    this.size.sm_up = false;
    this.size.md_down = false;
    this.size.md_up = false;
    this.size.lg_down = false;
    this.size.lg_up = false;
    let w = this.pl.width();
    if (w <= 576) {
      this.size.xs = true;
      this.size.sm_down = true;
      this.size.md_down = true;
      this.size.lg_down = true;
    } else if (w < 768) {
      this.size.sm = true;
      this.size.sm_up = true;
      this.size.md_down = true;
      this.size.lg_down = true;
    } else if (w < 992) {
      this.size.md = true;
      this.size.lg_down = true;
      this.size.sm_up = true;
      this.size.md_up = true;
    } else if (w < 1200) {
      this.size.lg = true;
      this.size.sm_up = true;
      this.size.md_up = true;
      this.size.lg_up = true;
    } else {
      this.size.xl = true;
      this.size.sm_up = true;
      this.size.md_up = true;
      this.size.lg_up = true;
    }
    // console.log(this.size);
  }
  
}
