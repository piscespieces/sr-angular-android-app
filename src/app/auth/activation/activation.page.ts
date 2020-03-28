import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { API_RESOURCE } from '../../../constants/api-resource';

import { ToastService } from '../../helper/toast.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-activation',
  templateUrl: './activation.page.html',
  styleUrls: ['./activation.page.scss'],
})
export class ActivationPage implements OnInit {

  userId: string;
  activationCode: string;

  isLoading = false;


  constructor(
    private authService: AuthenticationService,
    private toastService: ToastService,
    private loadingController: LoadingController,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.userId = params.id;
    });
  }

  requestActivation() {

    const activationData = { user_id: this.userId, activation_code: this.activationCode };

    console.log(activationData);

    this.presentLoading();

    this.authService.post(API_RESOURCE.ACTIVATE_ENDPOINT, activationData).subscribe(
      result => {
                  this.dismissLoading();
                  console.log(result);
                },
      onerror => {
                  this.dismissLoading();
                  console.log(onerror.error.message);
                  this.toastService.displayToast(onerror.error.message);
                }
    );
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 5000,
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

}
