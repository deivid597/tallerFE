import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }
//Evento botones CRUD
  onNuevo() {
    alert('Creando nuevo');
  }
  onEditar() {
  }
  onEliminar() {
  }
  //Evento botoenes en general
  onFiltrar() {
  }
  onImprimir() {
  }
  onCerrar() {
  }

  ngOnInit(): void {
    
  }
}
