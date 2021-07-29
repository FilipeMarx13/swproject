import { Filme } from './../filme/filme';
import { PeopleserviceService } from './../service/peopleservice.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { People } from './people';
import { publish, map } from 'rxjs/operators';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  loaded = false;

  people: People[] = [];
  novoarray = [];

  constructor(private peopleService: PeopleserviceService) { }

  public getAvatar(numeroAvatar: number) {
    const avatar: any = {
      0: { url: 'https://i5.walmartimages.com/asr/0db1c701-ae25-4bc3-a182-dba1209f4ca6_1.6c031298e5a50be9413e57d983ee1d71.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff' },
      1: { url: 'https://cdn-cosmos.bluesoft.com.br/products/637769178352' },
      2: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_cdvPL5aJ2zfx82oZk-iLZpzPD17KwpAoA&usqp=CAU' },
      3: { url: 'https://cdn.awsli.com.br/600x450/297/297688/produto/9254117/f2768eb2ea.jpg' },
      4: { url: 'https://i.pinimg.com/originals/55/43/8e/55438e4f05782fc444be4f7e4d685c5d.png' },
      5: { url: 'https://i.ebayimg.com/images/g/tvoAAOSwmC5a0Ogp/s-l300.jpg' },
      6: { url: 'https://images.shoutwiki.com/lego/a/a1/BeruLars.png' },
      7: { url: 'https://images.shoutwiki.com/lego/thumb/b/b3/R5D4-75059.jpg/1200px-R5D4-75059.jpg' },
      8: { url: 'https://www.lego.com/cdn/cs/catalog/assets/blt60ad69d024f70325/1/OverviewBiggsDarklighter.png?width=320' },
      9: { url: 'https://cdn.dooca.store/184/products/dcho1we4tuarmn0vy0dhrky1bmsm9hosytzq_640x640+fill_ffffff.jpg?v=1598198172&webp=0' },
    }
    return avatar[numeroAvatar].url
  }

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true;
    }, 1000);
    this.getPeople();

  }
  getPeople() {
    this.peopleService.getPeople().subscribe(res => {
      res.results.map((pessoa: any) => {
        pessoa.nomeFilme = []
        this.getMundo(pessoa.homeworld, pessoa)
        this.getFilme(pessoa)

      })
      this.people = res.results
    });
  }
  getMundo(url: any, pessoa: any) {
    this.peopleService.getMundo(url).subscribe((planeta) => {
      pessoa.nomePlaneta = planeta.name
    })
  }
  getFilme(pessoa: any) {
    pessoa.films.forEach((urlFilme: any) => {
      this.peopleService.getMundo(urlFilme).subscribe((filme) => {
        pessoa.nomeFilme.push(filme.title)
      })
    })
  }

  // peopleById(res: any) {
  //   let url = 'https://swapi.dev/api/people/'
  //   for (let peopleById = 1; peopleById <= res; peopleById++) {
  //     console.log(url + peopleById)
  //   }
  // }

}
