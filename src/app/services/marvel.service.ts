import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: "root"
})
export class MarvelService{
    url: string = 'https://gateway.marvel.com:443/v1/public/characters'
    apiKey: string = "f111b43361247b361acacbc00d97f68e"
    hash: string = "2659514642a8f29b4085e8524379be54"
    ts: number = 1
    heroi: string = "nameStartsWith="
    nome: string;
    param: any;

    constructor(private http?: HttpClient) {
    }

    getCharacters(nomeHeroi: string): Observable<any> {
        this.param = `${this.url}?${this.heroi}${nomeHeroi}&ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`;
        return this.http.get<any>(this.param);
    }
}

