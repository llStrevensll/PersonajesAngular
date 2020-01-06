import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-personaje-tarjeta',
  templateUrl: './personaje-tarjeta.component.html',
  styleUrls: ['./personaje-tarjeta.component.css']
})
export class PersonajeTarjetaComponent implements OnInit {
  
  @Input() personaje:any = {};
  @Input() index:number;

  @Output() personajeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.personajeSeleccionado = new EventEmitter();//inicializar
   }

  ngOnInit() {
  }

  verPersonaje(){
    //console.log(this.index);
    this.router.navigate( ['/personaje', this.index]);
    //this.personajeSeleccionado.emit(this.index);
  }

}
