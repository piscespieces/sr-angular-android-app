import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async displayToast(message: string, duration=1000) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: "bottom",
    });
    toast.present();
  }
}
