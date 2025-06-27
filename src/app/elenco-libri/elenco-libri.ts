import { Component } from '@angular/core';
import {Libro} from'../libro.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elenco-libri',
  imports: [CommonModule],
  templateUrl: './elenco-libri.html',
  styleUrl: './elenco-libri.css'
})
export class ElencoLibri {
  
  libri: Libro[] = [
    new Libro('Il nome della rosa', 'Umberto Eco', 'Storico', 'Un mistero in un monastero.'),
    new Libro('1984', 'George Orwell', 'Distopico', 'Società totalitaria e sorveglianza.'),
    new Libro('Harry Potter', 'J.K. Rowling', 'Fantasy', 'Magia e avventure a Hogwarts.')
  ];
  
  constructor(private router: Router) {}

mostraDettagli(titolo: string) {
  this.router.navigate(['/dettaglio', titolo]);
}
}
