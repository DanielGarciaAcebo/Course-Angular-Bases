import { Component,Input} from '@angular/core';
import {DbzService} from "../services/dbz.service";
import {personaje} from "../interfaces/dbz.interfaces";



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent{

  get personajes(){
    return this.dbzService.personajes
  }

  constructor(private dbzService: DbzService) {}

}
