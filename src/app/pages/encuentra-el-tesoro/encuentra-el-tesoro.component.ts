import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuentra-el-tesoro',
  templateUrl: './encuentra-el-tesoro.component.html',
  styleUrls: ['./encuentra-el-tesoro.component.scss'],
})
export class EncuentraElTesoroComponent {
  filas: any; //estas dos variables (filas y columnas) son lo primero que creamos para que los inputs lOs reconozcan & las tipamos
  columnas: any;
  filasArray: any[]; //estas dos variables las creamos cuando queremos hacer el boton para que nos pinte la info que pasaremos a los inputs
  columnasArray: any[];
  tabla: boolean; //creamos y tipamos nuestra tabla
  imagenSrc: string[][]; //aqui definimos una variable para nuestras rutas
  imagenGanador: any; //y aqui creamos la variable para la imagen ganadora (tesoro)
  contador: any;
  finJuego: boolean;
  // giradas: boolean;


  constructor() {
    this.filas; // this.filas y columnas las declaramos y las inicializamos para que las propiedades de las variables tengan un comienzo coherente
    this.columnas;
    this.filasArray = []; // este array de filas y el de columnas las creamos para que tengamos donde guardar la info recogida del botón
    this.columnasArray = [];
    this.tabla = false; //lo igualamos a false porque al comienzo del juego no tenemos nada
    this.imagenSrc = []; // inicializamos nuestras rutas de la imagen en un array vacío
    this.imagenGanador = [];
    this.contador = 0;
    this.finJuego = false;
    // this.giradas = false;
   

  }

  getRandom(num: number){
    return Math.floor(Math.random() * (num))
  }
  

  pintarTabla(event: any) {
    this.filasArray = Array.from({ length: this.filas }); //aqui le agregamos con el metodo Array.form() una intancia a nuestro array de filas, és decir, una fila más
    this.columnasArray = Array.from({ length: this.columnas }); //aqui lo mismo pero de parámetro pasamos nuestro array de columnas
    this.tabla = true; // en este paso declaramos la variable true para que en la condición podamos referirnos y poder pintarlo
    this.imagenSrc = []; //aqui queremos que nos pinte nuestras imágenes
    this.imagenGanador [0] = this.getRandom(this.filas) // aqui estamos asignando numero aleatorio a la variable imagenGanador, en este caso a las filas
    this.imagenGanador [1] = this.getRandom(this.columnas) //y aqui pero a las columnas, 


    for (let i = 0; i < this.filas; i++) {
      this.imagenSrc[i] = [];
      for (let j = 0; j < this.columnas; j++) {
        this.imagenSrc[i][j] = './assets/tesoro/x.png';
      }
    }
  }

  

  cambiarImagen(filas: number, columnas: number) {
    if(this.finJuego){
      return;
    }

    this.contador++
    if (this.imagenSrc[filas][columnas] === './assets/tesoro/x.png') {
      this.imagenSrc[filas][columnas] = './assets/tesoro/skull.png';
    } else {
      this.imagenSrc[filas][columnas] = './assets/tesoro/x.png';
    }
    
    if (this.imagenGanador[0] == filas && this.imagenGanador[1] == columnas){
      this.imagenSrc[filas][columnas] = "./assets/tesoro/chest.png"
      // this.tesoroEncontrado = true;
      setTimeout(function(){
        alert("Tesoro ENCONTRADO!")
        
      }, 100)
      this.finJuego = true;

    }
  }

  resetearJuego() {
    this.filas = null;
    this.columnas = null;
    this.filasArray = [];
    this.columnasArray = [];
    this.tabla = false;
    this.imagenSrc = [];
    this.imagenGanador = [];
    this.contador = 0;
    this.finJuego = false;
  }
  
}
