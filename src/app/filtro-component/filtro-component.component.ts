import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { personaje } from '../personaje';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filtro-component',
  templateUrl: './filtro-component.component.html',
  styleUrls: ['./filtro-component.component.css']
})
export class FiltroComponentComponent {

  fullPersonajes: personaje[] = [];
  personajesFiltrados: personaje[] = []
  personaje:personaje = new personaje;
  personajeModal: personaje = new personaje;

  Alive:boolean = false; Dead:boolean = false; UnknownStatus:boolean = false; 
  Human:boolean = false; Alien:boolean = false; Humanoid:boolean = false; Poopybutthole:boolean = false; Mythological:boolean = false; UnknownSpecies:boolean = false; Animal:boolean = false; Disease:boolean = false; Robot:boolean = false; Cronenberg:boolean = false; Planet:boolean = false;
  Female:boolean = false; Male:boolean = false; Genderless:boolean = false; UnknownGender:boolean = false;

  constructor(private http: HttpClient, public modal: NgbModal) { }

  ngOnInit() {
    this.cargarFullPersonajes();
  }

//Metodo para cambiar información del personaje seleccionado.
cambiarInfoPersonaje(idPersonaje: number | undefined) {
  this.http.get("https://rickandmortyapi.com/api/character/" + idPersonaje).subscribe((resp: any) => {
    this.personajeModal = resp;
    console.log(this.personajeModal)
  })
}

  cargarFullPersonajes() {
    this.http.get("https://rickandmortyapi.com/api/character").subscribe((resp: any) => {

      for (let i = 1; i < resp.info.count; i++) {
        this.http.get("https://rickandmortyapi.com/api/character/" + i).subscribe((resp: any) => {
          this.personaje = resp;
          if (this.personaje.species == 'Robot') {
            this.personajesFiltrados.push(this.personaje);
          }
          this.fullPersonajes.push(this.personaje)
        })
      }

      console.log(this.fullPersonajes)

    })


  }



  filtrarPersonajes(filtro:String) {

    switch (filtro) {
      case 'Alive':
          if (this.Alive) {
            this.Alive = false;
          } else {
            this.Alive = true;
          }

          this.seleccionFiltrado("Status", filtro);
        break;

        case 'Dead':
          if (this.Dead) {
            this.Dead = false;
          } else {
            this.Dead = true;
          }

          this.seleccionFiltrado("Status", filtro);
        break;

        case 'UnknownStatus':
          if (this.UnknownStatus) {
            this.UnknownStatus = false;
          } else {
            this.UnknownStatus = true;
          }

          this.seleccionFiltrado("Status", "unknown");
        break;

        case 'Human':
          if (this.Human) {
            this.Human = false;
          } else {
            this.Human = true;
          }

          this.seleccionFiltrado("Species", filtro);
        break;

        case 'Alien':
          if (this.Alien) {
            this.Alien = false;
          } else {
            this.Alien = true;
          }

          this.seleccionFiltrado("Species", filtro);
        break;

        case 'Humanoid':
          if (this.Humanoid) {
            this.Humanoid = false;
          } else {
            this.Humanoid = true;
          }

          this.seleccionFiltrado("Species", filtro);
        break;

        case 'Poopybutthole':
          if (this.Poopybutthole) {
            this.Poopybutthole = false;
          } else {
            this.Poopybutthole = true;
          }

          this.seleccionFiltrado("Species", filtro);
        break;

        case 'Mythological':
          if (this.Mythological) {
            this.Mythological = false;
          } else {
            this.Mythological = true;
          }

          this.seleccionFiltrado("Species", "Mythological Creature");
        break;

        case 'UnknownSpecies':
          if (this.UnknownSpecies) {
            this.UnknownSpecies = false;
          } else {
            this.UnknownSpecies = true;
          }

          this.seleccionFiltrado("Species", "unknown");
        break;

        case 'Animal':
          if (this.Animal) {
            this.Animal = false;
          } else {
            this.Animal = true;
          }

          this.seleccionFiltrado("Species", filtro);
        break;

        case 'Disease':
          if (this.Disease) {
            this.Disease = false;
          } else {
            this.Disease = true;
          }

          this.seleccionFiltrado("Species", filtro);
        break;

        case 'Robot':
          if (this.Robot) {
            this.Robot = false;
          } else {
            this.Robot = true;
          }
          
          this.seleccionFiltrado("Species", filtro);
        break;

        case 'Cronenberg':
          if (this.Cronenberg) {
            this.Cronenberg = false;
          } else {
            this.Cronenberg = true;
          }

          this.seleccionFiltrado("Species", filtro);
        break;

        case 'Planet':
          if (this.Planet) {
            this.Planet = false;
          } else {
            this.Planet = true;
          }

          this.seleccionFiltrado("Species", filtro);
        break;

        case 'Female':
          if (this.Female) {
            this.Female = false;
          } else {
            this.Female = true;
          }

          this.seleccionFiltrado("Gender", filtro);
        break;

        case 'Male':
          if (this.Male) {
            this.Male = false;
          } else {
            this.Male = true;
          }

          this.seleccionFiltrado("Gender", filtro);
        break;

        case 'Genderless':
          if (this.Genderless) {
            this.Genderless = false;
          } else {
            this.Genderless = true;
          }

          this.seleccionFiltrado("Gender", filtro);
        break;

        case 'UnknownGender':
          if (this.UnknownGender) {
            this.UnknownGender = false;
          } else {
            this.UnknownGender = true;
          }

          this.seleccionFiltrado("Gender", "unknown");
        break;

        case 'Episodes':
          
        break;

        case 'Favorites':
        break;
    }
  }

  seleccionFiltrado(filtro:String, filtroValue:String) {

    switch (filtro) {
      case 'Status':
        this.personajesFiltrados = []
        for (let i = 0; i < this.fullPersonajes.length; i++) {
          if (this.fullPersonajes[i].status == filtroValue) {
            this.personajesFiltrados.push(this.fullPersonajes[i])
          }
        }
        console.log(this.personajesFiltrados)
        break;

      case 'Species':
        this.personajesFiltrados = []
        for (let i = 0; i < this.fullPersonajes.length; i++) {
          if (this.fullPersonajes[i].species == filtroValue) {
            this.personajesFiltrados.push(this.fullPersonajes[i])
          }
        }
        console.log(this.personajesFiltrados)
      break;

      case 'Gender':
        this.personajesFiltrados = []
        for (let i = 0; i < this.fullPersonajes.length; i++) {
          if (this.fullPersonajes[i].gender == filtroValue) {
            this.personajesFiltrados.push(this.fullPersonajes[i])
          }
        }
        console.log(this.personajesFiltrados)
      break;
    }
    
  }


}
