import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class AlertsService {
  constructor(private alertController: AlertController) {}

  async originalSongAlert() {
    const alert = await this.alertController.create({
      header: "Cannot Create Song",
      // subHeader: "Subtitle",
      message:
        "At this moment we are only accepting new and original ideas. We will be implementing the possibility to register a cover or if your song contains parts (such as samples) in the near future.",
      buttons: ["OK"],
    });

    await alert.present();
  }

  async soleCreatorAlert(user_input) {
    const alert = await this.alertController.create({
      header: "Quick Alert",
      // subHeader: "Subtitle",
      message:
        "Please note that if you say no you will be required to enter the collaborator(s) name and email and they will need to agree before the work is registered",
      buttons: [
        {
          text: "CANCEL",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log(`The user cancelled`);
          },
        },
        {
          text: "OK"
        },
      ],
    });

    await alert.present();
  }

  async songNameAlert() {
    const alert = await this.alertController.create({
      header: "Required Field",
      message: "Song Name: Please fill out this field",
      buttons: ["OK"],
    });
    await alert.present();
  }

  async artistAlert() {
    const alert = await this.alertController.create({
      header: "Required Field",
      message: "Artist Name: Please fill out this field",
      buttons: ["OK"],
    });
    await alert.present();
  }
}
