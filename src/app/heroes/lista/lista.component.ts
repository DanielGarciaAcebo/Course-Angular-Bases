import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent  {

  heroes:string[] =["hulk","Spiderman","thor","Ironman","Capitán América","Goku", "krilling","Tu madre tio"]
  heroeBorrado:string = ""

  borrarHeroe(){
  this.heroeBorrado = this.heroes.pop() || ""
  }

}
