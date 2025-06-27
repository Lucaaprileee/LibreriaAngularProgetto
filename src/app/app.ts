import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AggiungiLibroComponent } from './aggiungi-libro-component/aggiungi-libro-component';
import { RimuoviLibroComponent } from './rimuovi-libro-component/rimuovi-libro-component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            RouterModule,
            AggiungiLibroComponent,
            RimuoviLibroComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  protected title = 'LibreriaAngular';
}