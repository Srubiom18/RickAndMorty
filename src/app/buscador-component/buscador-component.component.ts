import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { personaje } from '../personaje';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-buscador-component',
  templateUrl: './buscador-component.component.html',
  styleUrls: ['./buscador-component.component.css']
})

export class BuscadorComponentComponent {

  constructor(private http: HttpClient, public modal: NgbModal) { }

  //Array para guardar los personajes
  arrayPrincipales: personaje[] = [];
  arrayBuscados: personaje[] = [];

  //Paginacion
  next: boolean = false;
  prev: boolean = false;
  nextPage: string = "";
  prevPage: string = "";

  //Boleanos para poner o quitar elementos
  principales: boolean = true;
  buscados: boolean = false;
  cruz: boolean = false;
  paginacion: boolean = false;

  personajeModal: personaje = new personaje;

  ngOnInit() {
    this.generarPersonajesPrincipales();
    console.log(this.arrayPrincipales)
  }

  //Metodo para cambiar información del personaje seleccionado.
  cambiarInfoPersonaje(idPersonaje: number | undefined) {
    this.http.get("https://rickandmortyapi.com/api/character/" + idPersonaje).subscribe((resp: any) => {
      this.personajeModal = resp;
      console.log(this.personajeModal)
    })
  }


  //Metodo que genera los 5 personajes principales de la serie.
  generarPersonajesPrincipales() {
    this.arrayPrincipales = []
    for (let i = 1; i < 6; i++) {
      let per: personaje = new personaje;
      this.http.get("https://rickandmortyapi.com/api/character/" + i).subscribe((resp: any) => {
        per = resp;
        this.arrayPrincipales.push(per)
      })
    }
  }


  //Busca todas las coincidencias segun la barra de busqueda
  buscador(nombre: String) {
    this.principales = false;
    this.buscados = true;
    this.cruz = true;
    this.paginacion = true;

    if (nombre.length != 0) {
      this.http.get("https://rickandmortyapi.com/api/character/?name=" + nombre).subscribe((resp: any) => {
        this.arrayBuscados = resp.results;

        console.log(resp.info)

        //Estas lineas son para manejar la paginacion de prev
        if (resp.info.prev != null) {
          this.prevPage = resp.info.prev
          this.prev = true;
        } else {
          this.prev = false;
        }

        //Estas lineas son para manejar la paginacion de next
        if (resp.info.next != null) {
          this.nextPage = resp.info.next
          this.next = true;
        } else {
          this.next = false;
        }
      })
    } else {
      this.principales = true;
      this.buscados = false;
      this.cruz = false;
      this.paginacion = false;
    }
  }

  //Limpia el input y muestra los personajes principales
  eliminarBusqueda() {

  }

  //Este metodo avanza la pagina segun el resultado de la busqueda
  siguientePagina() {
    this.http.get(this.nextPage).subscribe((resp: any) => {
      this.arrayBuscados = resp.results;

      //Estas lineas son para manejar la paginacion de prev
      if (resp.info.prev != null) {
        this.prevPage = resp.info.prev
        this.prev = true;
      } else {
        this.prev = false;
      }

      //Estas lineas son para manejar la paginacion de next
      if (resp.info.next != null) {
        this.nextPage = resp.info.next
        this.next = true;
      } else {
        this.next = false;
      }
    })
  }

  //Este metodo retrocede la pagina segun el resultado de la busqueda
  anteriorPagina() {
    this.http.get(this.prevPage).subscribe((resp: any) => {
      this.arrayBuscados = resp.results;

      //Estas lineas son para manejar la paginacion de prev
      if (resp.info.prev != null) {
        this.prevPage = resp.info.prev
        this.prev = true;
      } else {
        this.prev = false;
      }

      //Estas lineas son para manejar la paginacion de next
      if (resp.info.next != null) {
        this.nextPage = resp.info.next
        this.next = true;
      } else {
        this.next = false;
      }
    })
  }

}
