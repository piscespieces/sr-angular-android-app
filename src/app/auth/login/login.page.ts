import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { Router } from "@angular/router";
import { API_RESOURCE } from "../../../constants/api-resource";

import { ToastService } from "../../helper/toast.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  isLoading = false;

  credentialsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private toastService: ToastService,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.router.navigate(["/tabs/profile"]); // This is for testing purposes, delete once finished
    this.presentLoading();
    this.authService
      .post(API_RESOURCE.LOGIN_ENDPOINT, this.credentialsForm.value)
      .subscribe(
        (result) => {
          this.dismissLoading();
          console.log(result);
          //this.router.navigate(['/activation/' + result['data']['user_id']]);
        },
        (onerror) => {
          this.dismissLoading();
          console.log(onerror.error.message);
          this.toastService.displayToast(onerror.error.message);
        }
      );
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController
      .create({
        duration: 5000,
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then(() => console.log("abort presenting"));
          }
        });
      });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController
      .dismiss()
      .then(() => console.log("dismissed"));
  }
}
