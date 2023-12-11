import { Component, OnInit, Input } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { DadosMarvel, MarvelPagination, DadosMarvelHerois } from '../services/marvel-result.service';
import { MarvelComponent } from '../marvel/marvel.component';

@Component({
  selector: 'app-table-marvel',
  templateUrl: './table-marvel.component.html',
  styleUrls: ['./table-marvel.component.css'],
  providers: [MarvelService]
})
export class TableMarvelComponent implements OnInit {

  constructor(private marvelService: MarvelService, private marvelComponent: MarvelComponent) {
    marvelComponent.buscarHeroi.subscribe((nomeHeroi: string) => this.buscarHeroi(nomeHeroi));
  }



  dadosMarvel: DadosMarvelHerois[] = []
  marvelPagination: MarvelPagination;
  limit = '';
  page = '1';
  detalheHeroi: DadosMarvelHerois[] = [];
  nomeHeroi: string;

  ngOnInit() {
  }


  buscarHeroi(nomeHeroi: string) {
    this.dadosMarvel = [];
    this.marvelService.getCharacters(nomeHeroi)
      .subscribe(
        (next: any) => {
          this.marvelPagination = next
          const dados = JSON.parse(JSON.stringify(this.marvelPagination.data));
          const resultados = dados.results;
          if (this.dadosMarvel !== resultados) {
            console.log('O objeto dadosMarvel foi atualizado.');
          }
          this.dadosMarvel = resultados;
          console.log(this.dadosMarvel);
        },
        (error: any) => {
          console.error('Erro na requisição HTTP:', error);
        }
      )
  }

  verDetalhesHeroi: boolean = false;
  mostrarDetalhes(i: number) {
    let elemento = document.getElementById('heroiShow' + i);
    if (elemento.classList.contains('show')) {
      elemento.classList.remove('show');
    }
    else {
      elemento.classList.add('show');
    }
  }

  formatarData(data: string): string {
    const dataFormatada = new Date(data);
    const dia = dataFormatada.getDate();
    const mes = dataFormatada.getMonth() + 1;
    const ano = dataFormatada.getFullYear();

    const diaFormatado = dia < 10 ? '0' + dia : dia;
    const mesFormatado = mes < 10 ? '0' + mes : mes;

    const dataFinal = `${diaFormatado}/${mesFormatado}/${ano}`;

    return dataFinal;
  }

  voltar() {
    const carrossel = document.getElementById('carrossel');
    carrossel.scrollLeft -= 500;
    carrossel.style.scrollBehavior = 'smooth';
  }

  passar() {
    const carrossel = document.getElementById('carrossel');
    carrossel.scrollLeft += 500;
    carrossel.style.scrollBehavior = 'smooth';
  }


}
