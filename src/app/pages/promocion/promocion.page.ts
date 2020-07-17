import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/Loading/loading.service';
import { Promocion } from 'src/app/models/Promocion.model';
import { compileNgModule } from '@angular/compiler';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.page.html',
  styleUrls: ['./promocion.page.scss'],
})
export class PromocionPage implements OnInit {

  promociones: Promocion[] = [];
  AppEnvironment = environment;

  constructor(
    private loading: LoadingService,
    private router: Router,
    private AppService: HttpService,
  ) {
    this.getData();
  }

  ngOnInit() {
  }

  detallePromocion(promocion: any) {
    this.router.navigate(['detalle-promocion'], { queryParams: promocion })
  }

  getData() {
    this.AppService.getEntitys(this.AppEnvironment.urlBase + this.AppEnvironment.endPoints.promociones).then((response: Promocion[]) => {
      if (response) {
        this.promociones = response;
      }
    }).catch((error) => {
      console.log(error);
    });
  }
}
