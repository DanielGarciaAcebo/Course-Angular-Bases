import {Component, EventEmitter, Input, Output} from '@angular/core';
import {personaje} from "../interfaces/dbz.interfaces";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  constructor(private dbzService:DbzService) {}
  @Input() newPj: personaje ={
    name: "",
    pg: 0
  }
  agregar(){
    if(this.newPj.name.trim().length===0){return;}

    this.dbzService.agreeCharacter(this.newPj)

    this.newPj={
      name:"",
      pg: 0
    }
  }

  // @Output() onNewCharacter: EventEmitter <personaje> = new EventEmitter()



}
