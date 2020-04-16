import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/Clases/mascota';


@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  @Input() mascota: Mascota;
  mostrar: boolean  = false;

  constructor() { }

  ngOnInit(): void {
  }

  public MostrarDetalles(){
    console.log("Emitiendo");
    if (this.mostrar === false)
    {
      this.mostrar = true;
    }
    else
    {
      this.mostrar = false;
    }
  }

}
