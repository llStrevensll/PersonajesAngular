import { Component, OnInit } from '@angular/core';
import { PersonajesService, Personaje } from "../../services/personajes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {
  
  personajes:Personaje[] = [];

  constructor( private _personajesService: PersonajesService, private router:Router) { 
    //console.log("constructor");
  }

  ngOnInit() {
    this.personajes = this._personajesService.getPersonajes();
    //console.log(this.personajes);
  }
  
  //Metodo ver personaje
  verPersonaje(index:number){
    //console.log(index);
    this.router.navigate( ['/personaje', index]);
    
  }
}
