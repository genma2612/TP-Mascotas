import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/Clases/mascota';

@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})

export class CargaMascotaComponent implements OnInit {

  nombre: string;
  tipo: string;
  imagen: string;
  mascotas: Array<Mascota> = [];

  constructor() { }

  ngOnInit(): void {
    if (window.localStorage.getItem('mascotas').length) {
      this.mascotas = JSON.parse(window.localStorage.getItem('mascotas'));
    }
  }

  public enviar(event){
    this.mascotas.push(new Mascota(this.nombre, this.tipo, this.imagen));
    window.localStorage.setItem('mascotas', JSON.stringify(this.mascotas));
  }

}
