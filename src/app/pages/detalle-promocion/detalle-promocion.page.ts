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
