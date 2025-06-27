
export class Libro {

public titolo: string;
public autore: string;
public genere: string;
public trama: string;

constructor(titolo: string, autore: string,
genere: string, trama:string)
{
this.titolo = titolo;
this.autore = autore;
this.genere = genere;
this.trama = trama;
}
}