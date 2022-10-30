import {NgModule} from "@angular/core";
import {HeroeComponent} from "./heroe/heroe.component";
import {ListaComponent} from "./lista/lista.component";
import {CommonModule} from "@angular/common";

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
