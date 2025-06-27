import { Component } from '@angular/core';
import {Libro} from'../libro.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AggiungiLibroComponent } from '../aggiungi-libro-component/aggiungi-libro-component';

@Component({
  selector: 'app-elenco-libri',
  imports: [CommonModule, AggiungiLibroComponent],
  templateUrl: './elenco-libri.html',
  styleUrl: './elenco-libri.css'
})
export class ElencoLibri {
  
  libri: Libro[] = [
    new Libro('Il nome della rosa', 'Umberto Eco', 'Storico', 'Un mistero in un monastero.'),
    new Libro('1984', 'George Orwell', 'Distopico', 'Società totalitaria e sorveglianza.'),
    new Libro('Harry Potter', 'J.K. Rowling', 'Fantasy', 'Magia e avventure a Hogwarts.')
  ];

  onLibroAggiunto(l : Libro[])
  {
    this.libri = l;
  }
  
  constructor(private router: Router) {}

  mostraDettagli(titolo: string) {
    this.router.navigate(['/dettaglio', titolo]);
  }
}
