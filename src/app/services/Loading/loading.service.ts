import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading: any;
  isLoading: boolean = false;
  constructor(
    private loadingCtrl: LoadingController
  ) { }

  async showloader(message: string = "Cargando") {
    if (!this.isLoading) {
      this.isLoading = true;
      this.loading = await this.loadingCtrl.create({
        spinner: null,
        duration: 500,
        message: `
        <div class="custom-spinner-container">
        <div class="custom-spinner-box">
        <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" />
        <div class="custom-spinner-text">`+ message + `</div>` +
          `</div>` +
          `</div>`,
      });
      await this.loading.present();
    }
  }
}
