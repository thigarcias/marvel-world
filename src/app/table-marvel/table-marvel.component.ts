import {Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { DadosMarvel, MarvelPagination, DadosMarvelHerois } from '../services/marvel-result.service';

@Component({
  selector: 'app-table-marvel',
  templateUrl: './table-marvel.component.html',
  styleUrls: ['./table-marvel.component.css'],
  providers: [MarvelService]
})
export class TableMarvelComponent implements OnInit {

  constructor(
    private marvelService: MarvelService,
  ) { }

  nomeHeroi: string;

  ngOnInit() {
    if (this.nomeHeroi) {
      this.buscarHeroi(this.nomeHeroi);
    }
  }

  public currentPage = 1;
  public pageSize = 100;
  dadosMarvel: DadosMarvelHerois[] = []
  marvelPagination: MarvelPagination;
  limit = '';
  page = '1';
  detalheHeroi: DadosMarvelHerois[] = [];

  keys = Object.keys;
  key: string = 'Ultima Modificação';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  

  buscarHeroi(nomeHeroi: string){
    this.marvelService.getCharacters(nomeHeroi)
    .subscribe(
      (next: any) => {
        this.marvelPagination = next
        const dados = JSON.parse(JSON.stringify(this.marvelPagination.data));
        const resultados = dados.results;
  
        if (resultados && resultados.length > 0) {
          this.dadosMarvel = resultados;
          console.log(this.dadosMarvel);
        } else {
          console.log('Nenhum resultado encontrado.');
        }
      },
      (error: any) => {
        console.error('Erro na requisição HTTP:', error);
      }
    )
  }

verDetalhesHeroi: boolean = false;
mostrarDetalhes(i: number) {
  let elemento = document.getElementById('collapseRow' + i);
  elemento.classList.toggle('show');
}

  


}
