import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input()
  listaLibri!: Libro[];
  @Output() 
  addLibro: EventEmitter<Libro[]> = new EventEmitter<Libro[]>();

  libro : Libro = new Libro('', '', '', '');

  submitted: boolean = false;

  onSubmit(): void
  {
    this.submitted = true;
    this.listaLibri.push(this.libro = new Libro(this.libro.titolo, this.libro.autore,this.libro.genere, this.libro.trama));
    this.addLibro.emit(this.listaLibri);
  }
}