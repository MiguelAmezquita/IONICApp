import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetallePromocionPageRoutingModule } from './detalle-promocion-routing.module';
import { DetallePromocionPage } from './detalle-promocion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePromocionPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DetallePromocionPage]
})
export class DetallePromocionPageModule { }
