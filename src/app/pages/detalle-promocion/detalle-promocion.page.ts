import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Promocion } from '../../models/Promocion.model';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-detalle-promocion',
  templateUrl: './detalle-promocion.page.html',
  styleUrls: ['./detalle-promocion.page.scss'],
})
export class DetallePromocionPage implements OnInit {


  /**
  * En el constructor de la pagina se esta capturando el detalle de la promocion seleccinada en la pagina anterior
  **/


  promocion: Promocion
  param: any
  constructor(
    private router: ActivatedRoute,
    private platform: Platform,
  ) {
    this.router.queryParams.forEach((params: Promocion) => {
      this.promocion = params;
      console.log(this.promocion)
    })
  }

  ngOnInit() {
  }


  /**
  * Funcion utilizada para abrir google maps o cualquier plataforma de gps instalada en el dispositivo
  **/

  go() {
    let destination = this.promocion.latitud + ',' + this.promocion.longitud;
    //window.open ('geo: //' + this.latitude + ',' + this.longitude + '? Q =' + query, + '_ system');
    if (this.platform.is('ios')) {
      window.open('maps://?q=' + destination, '_system');
    }
    else {
      var label = encodeURI('7 East Street'); // encode the label!
      window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
    }
  }

}
