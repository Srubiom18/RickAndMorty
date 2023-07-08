import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { personaje } from '../personaje';

@Component({
  selector: 'app-random-component',
  templateUrl: './random-component.component.html',
  styleUrls: ['./random-component.component.css']
})
export class RandomComponentComponent {

  constructor(private http: HttpClient) {}

  personajeRandom: personaje = new personaje;

  ngOnInit() {
    this.generarPersonajeRandom();
  }

  generarPersonajeRandom() {
    let numPersonajeRandom = Math.floor(Math.random() * 826);

    this.http.get("https://rickandmortyapi.com/api/character/" + numPersonajeRandom).subscribe((resp: any) => {
        this.personajeRandom = resp;
      })
  }


}
