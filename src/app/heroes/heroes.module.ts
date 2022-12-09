import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {HeroeComponent} from "./heroe/heroe.component";
import {ListaComponent} from "./lista/lista.component";


@NgModule({
  declarations:[
    HeroeComponent,
    ListaComponent
  ],
  exports:[
    ListaComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{}
