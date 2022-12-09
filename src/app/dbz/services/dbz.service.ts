import {Injectable} from "@angular/core";
import {personaje} from "../interfaces/dbz.interfaces";


@Injectable()
export class DbzService{

  private _personajes: personaje[] =[
    {
      name:"Goku",
      pg:15000
    },{
      name:"Krilling",
      pg:700
    },{
      name:"Vegeta",
      pg:8500
    }
  ]

  get personajes(): personaje[]{
    return [...this._personajes]
  }
  constructor() {}

  agreeCharacter(personaje:personaje){
    this._personajes.push(personaje)
  }

}
