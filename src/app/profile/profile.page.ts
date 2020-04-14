import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { ProfilePopoverComponent } from "./popovers/profile-popover/profile-popover.component";

import { User } from "../interfaces/user";

@Component({
  selector: "app-profile",
  templateUrl: "profile.page.html",
  styleUrls: ["profile.page.scss"],
})
export class ProfilePage implements OnInit {
  user: User;

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {
    this.user = {
      user_id: 980032,
      first_name: "Miles",
      last_name: "Davis",
      email: "miles.davis@music.com",
      phone: "(909) 543-0989",
      photo_url:
        "https://yt3.ggpht.com/AbVZaa33IS4S6jPUUu9sBk4NKbmkmyAK77awkxr1NfInUJDCNfZPs_fWI84TabJkYV47FBVAiA9_MRnCTQ=s900-mo-c-c0xffffffff-rj-k-no",
      roles: "Trumpeter, Composer, Band Leader",
      summary:
        "American jazz trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th century music. Davis adopted a variety of musical directions in a five-decade career that kept him at the forefront of many major stylistic developments in jazz.",
    };
  }

  async showProfilePopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent,
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }
}
