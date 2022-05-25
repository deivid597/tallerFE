import { Component, OnInit } from '@angular/core';
import { SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  titulo: string = '';
  clientes = [new Cliente()];
  constructor(
    private srvCliente : ClienteService
  ) { }

//Evento botones CRUD
  onNuevo() {
    this.titulo = 'Nuevo Cliente'
  }
  onEditar(id: any) {
    this.titulo = 'Modificar Cliente' + id
  }
  onEliminar(id: any, nombre: string) {
    Swal.fire({
      title: `Eliminar cliente ${id}?`,
      text: nombre,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El archivo a sido eliminado',
          'success'
        )
      }
    })
  }

  //editar cliente
  onGuardar() {
    Swal.fire({
      icon: 'success',
      title: 'Cliente guardado',
      showConfirmButton: false,
      timer: 1500
    })
  }

  //Evento botoenes en general
  onFiltrar() {
    alert('Filtrando');
  }
  onImprimir() {
    alert('Imprimiendo');
  }
  onCerrar() {
    alert('Cerrando');
  }

  //
  ngOnInit(){
    this.srvCliente.filtrar(
      {idCliente:'',
      nombre:'',
      apellido1:'',
      apellido2:'',},1,10)
      .subscribe(
        data => {
          this.clientes = Object(data);
        }
      )
  }
}
