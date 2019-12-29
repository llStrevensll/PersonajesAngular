import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  
  personajes:any[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _personajesService:PersonajesService) {

    this.activatedRoute.params.subscribe( params => {
      this.termino =params['termino']; //termino usado en routes
      this.personajes = this._personajesService.buscarPersonajes(params['termino']);
      console.log(this.personajes);
      
    });
  }

  ngOnInit() {
  }


}
