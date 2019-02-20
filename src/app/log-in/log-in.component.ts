import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  vista = '';

  constructor() {
  }

  ngOnInit() {
  }

  setAdmin() {
    this.vista = 'gestion';
    console.log('Ir a gestion');
  }


  setSuc() {
    this.vista = 'pedidos';
    console.log('Ir a sucursal');
  }
  showAlert() {
    if ( this.vista === '') {
      alert('Seleccione una Vista : Administrador/Sucursal');
    }
  }
}
