import { Component } from '@angular/core';
import { Libro } from '../libro.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dettaglio-libro',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './dettaglio-libro.html',
  styleUrl: './dettaglio-libro.css'
})
export class DettaglioLibro {
     libro?: Libro;

  libri: Libro[] = [
    new Libro('Il nome della rosa', 'Umberto Eco', 'Storico', 'Un mistero in un monastero.'),
    new Libro('1984', 'George Orwell', 'Distopico', 'Società totalitaria e sorveglianza.'),
    new Libro('Harry Potter', 'J.K. Rowling', 'Fantasy', 'Magia e avventure a Hogwarts.')
  ];

  constructor(private route: ActivatedRoute) {
    const titolo = this.route.snapshot.paramMap.get('titolo');
    this.libro = this.libri.find(l => l.titolo === titolo!);
  }
}
