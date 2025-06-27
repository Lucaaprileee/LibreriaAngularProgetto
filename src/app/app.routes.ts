import { Routes } from '@angular/router';
import { ElencoLibri } from './elenco-libri/elenco-libri';
import { DettaglioLibro } from './dettaglio-libro/dettaglio-libro';


export const routes: Routes = [
  {path: '', redirectTo: '/elencolibri', pathMatch : 'full'},
  { path: 'elencolibri', component: ElencoLibri },
   { path: 'dettaglio/:titolo', component: DettaglioLibro }
  ];

export class AppRoutingModule { }