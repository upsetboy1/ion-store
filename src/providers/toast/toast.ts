import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {
  toast: any;

  constructor(private _toast: ToastController) {}

  show(msg: string, pos: string = 'bottom') {
    this._toast.create({
      message: msg,
      duration: 2000,
      position: pos
    }).present();
  }

  showWithClose(msg: string, pos: string = 'bottom') {
    this._toast.create({
      message: msg,
      showCloseButton: true,
      closeButtonText: 'Ok'
    }).present();
  }

}
