import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whack-a-mole',
  templateUrl: './whack-a-mole.component.html',
  styleUrls: ['./whack-a-mole.component.scss'],
})
export class WhackAMoleComponent implements OnInit {
  //creamos y tipamos las variables que usaremos

  casillas: any[] = [];
  puntuacion: number = 0;
  clicks: number = 0;
  // topo: number = 1000; // creamos y establecemos el topo a 1 segundo
  topoVisible: number | null = null; // posición actual del topo
  intervalo: any;
  acierto: boolean = false;

  constructor() {

  }

  Init() {
    this.puntuacion = 0; //establecemos nuestras puntuaciones a 0 desde el comienzo del juego
    this.clicks = 0; //establecemos nuestros clicks a 0 desde el comienzo del juego
    this.topoVisible = null; //nuestro topo empieza en null ya que antes de iniciar el juego no tiene que ser visible en ninguna casilla
    this.acierto = false; //calculamos los aciertos de los clicks, las inicializamos en false porque aun no hemos empezado
    this.casillas.forEach((casilla) => {
      casilla.tieneTopo = false; //la casilla tieneTopo la declaramos en false porque en este momento no hay topo
    });

    //con este codigo, lo que hacemos es detener el codigo y luego iniciarlo en un nuevo intervalo

    if (this.intervalo !== null) { //verificamos si el intervalo ya está activo,en caso de estarlo,
      clearInterval(this.intervalo);  //llama a clearInterval para detenerlo y poder iniciar el siguiente
    }
    this.intervalo = setInterval(() => {
      this.saltoTopo(); //establecemos nuevo intervalo aqui con la funcion setInterval que ejecutará nuestra funcion de saltoTopo cada segundo
    }, 1000);


  }


  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.casillas.push({
        tieneTopo: false,
      });
    }
  }

  sumarClic() {
    this.clicks++;
  }


  clickTopo(event: Event, casilla: any) {
    if (casilla.tieneTopo) {
      this.puntuacion++;
      this.acierto = true;
      this.clicks++;

    }
  

}

saltoTopo() {
  if (this.topoVisible !== null) {
    // si ya hay un topo activo, ocultarlo
    this.casillas[this.topoVisible].tieneTopo = false;
    this.topoVisible = null;
    this.acierto = false;
  }

  let nuevaPosicion: number;
  do {
    nuevaPosicion = Math.floor(Math.random() * 9);
  } while (nuevaPosicion === this.topoVisible); // seleccionar una posición diferente de la actual, si existe

  // Mostrar el topo en la nueva posición
  this.casillas[nuevaPosicion].tieneTopo = true;
  this.topoVisible = nuevaPosicion;

  if (this.acierto) {
    this.puntuacion++
  }
}
}
