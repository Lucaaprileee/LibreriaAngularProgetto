import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AggiungiLibroComponent } from './aggiungi-libro-component/aggiungi-libro-component';
import { RimuoviLibroComponent } from './rimuovi-libro-component/rimuovi-libro-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            AggiungiLibroComponent,
            RimuoviLibroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'LibreriaAngular';
}