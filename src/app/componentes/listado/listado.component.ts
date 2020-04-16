import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/Clases/mascota';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() mascota: Mascota;
  @Output() mostrar = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public detalle(){
    console.log('Desde listado');
    this.mostrar.emit();
  }
}
