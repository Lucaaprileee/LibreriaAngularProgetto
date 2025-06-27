import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libro } from '../libro.model';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-aggiungi-libro-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './aggiungi-libro-component.html',
  styleUrl: './aggiungi-libro-component.css'
})
export class AggiungiLibroComponent {

  inputTitolo = document.getElementById("titolo") as HTMLInputElement;
  titolo = this.inputTitolo.toString();

  inputAutore = document.getElementById("autore") as HTMLInputElement;
  autore = this.inputAutore.toString();

  inputGenere = document.getElementById("genere") as HTMLInputElement;
  genere = this.inputGenere.toString();

  inputTrama = document.getElementById("trama") as HTMLInputElement;
  trama = this.inputTrama.toString();
  
  l : Libro = new Libro('', '', '', '');

  submitted: boolean = false;

  onSubmit(): void
  {
    this.submitted = true;
    this.l = new Libro(this.titolo, this.autore,this.genere, this.trama);
  }
}