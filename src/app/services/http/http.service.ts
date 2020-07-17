import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingService } from '../Loading/loading.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private loadingService: LoadingService,
    private alertCtrl: AlertController,
    private http: HttpClient,
  ) { }


  /**
   * se utiliza para realizar la comuncación entre el back en y el front end.
   * @param url recibe una dirección en donde se encuntra alojado el EndPoint
   * @param message mensaje que se mostrara en el loading al momento de ralizar la petición
   * @param showloading  se puede utilizar para mostrar o no el loading al momento de realizar una peticion
   * retorna una promesa con una los datos obtenidos.
   **/
  getEntitys(url: string, message?: string, showloading: boolean = true) {
    if (showloading) this.loadingService.showloader(message);
    return this.http.get(url, { withCredentials: false }).toPromise().then((response: any[]) => {
      if (showloading) this.loadingService.showloader()
      return response;
    }).catch((error) => {
      this.loadingService.showloader()
      //this.showError(error)
    });
  }

  /**
  * se utiliza para realizar la comuncación entre el back en y el front end.
  * @param url recibe una dirección en donde se encuntra alojado el EndPoint
  * retorna una promesa con una entidad.
  **/
  getEntity(url: string, options?: {}) {
    this.loadingService.showloader()
    return this.http.get(url, options).toPromise().then((response: any) => {
      this.loadingService.showloader()
      return response;
    }).catch((error) => {
      this.loadingService.showloader()
      //this.showError(error)
    });
  }
  /**
   * @param url recibe una dirección en donde se encuntra alojado el EndPoint
   * @param entity recibe la entidad que se enviara al EndPoint
   * @param message mensaje que se mostrara en el loading al momento de ralizar la petición
   * @param showloading  se puede utilizar para mostrar o no el loading al momento de realizar una peticion
   * retorna una promesa con una los datos obtenidos.
   **/
  PostEntity(url: string, entity: any, message?: string, showloading: boolean = true, options?: {}) {
    if (showloading) this.loadingService.showloader(message);
    return this.http.post(url, entity, options).toPromise().then((response: any) => {
      if (showloading) this.loadingService.showloader()
      return response;
    }).catch((error) => {
      this.loadingService.showloader()
      //this.showError(error)
    });
  }
  /**
   * @param url recibe una dirección en donde se encuntra alojado el EndPoint
   * @param entity recibe la entidad que se enviara al EndPoint
   * @param message mensaje que se mostrara en el loading al momento de ralizar la petición
   * @param showloading  se puede utilizar para mostrar o no el loading al momento de realizar una peticion
   * retorna una promesa con una los datos obtenidos. esta funcion se es utilizada para elimiar las entidades recibidas
   * en su parametro entity
   **/
  deleteEntity(url: string, entity: any, message?: string, showloading: boolean = true) {
    if (showloading) this.loadingService.showloader(message);
    return this.http.delete(url, entity).toPromise().then((response: any) => {
      if (showloading) this.loadingService.showloader()
      return response;
    }).catch((error) => {
      this.loadingService.showloader()
      //this.showError(error)
    });
  }
  /**
   * @param url recibe una dirección en donde se encuntra alojado el EndPoint
   * @param entity recibe la entidad que se enviara al EndPoint
   * @param message mensaje que se mostrara en el loading al momento de ralizar la petición
   * @param showloading  se puede utilizar para mostrar o no el loading al momento de realizar una peticion
   * retorna una promesa con una los datos obtenidos. 
   * esta funcion se es utilizada crear o modificar una entidad
   * en su parametro entity
   **/
  updateEntity(url: string, entity: any, message?: string, showloading: boolean = true) {
    if (showloading) this.loadingService.showloader(message);
    return this.http.put(url, entity).toPromise().then((response: any) => {
      if (showloading) this.loadingService.showloader()
      return response;
    }).catch((error) => {
      this.loadingService.showloader()
      //this.showError(error)
    });
  }


  /**
   * esta funcion se puede utilizar para mostrar los errores que sucedan durante la peticion
   * Ejemplo: BadRequest, Unauthorized, Forbidden, NotFound, MethodNotAllowed entre otras.
   **/

  private showError(err: any) {
    let er: any = err["error"]["error"] || undefined;
    let code: number = 0;
    let message: string = "";
    let messageResponse: string = "";
    if (er) {
      code = er["code"] || "";
      message = er["message"] ? er["message"] : "";
      messageResponse = message ? message.split(':').length > 1 ? message.split(':')[1] : message.split(":")[0] : "Ocurrió un problema inesperado, intente mas tarde";
    }
    this.alertCtrl.create({
      header: "Error",
      message: messageResponse ? messageResponse : "Ocurrió un problema inesperado, intente mas tarde",
      cssClass: 'alert-title-image alert-message-center alert-title-color alert-message',
      buttons: [{
        text: 'Continuar',
        role: 'continuar',
        cssClass: 'colorBlueWhite',
        handler: () => {
          //this.back();
        }
      }]
    });
  }
}
