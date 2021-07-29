import { TesteService } from './../service/teste.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  loaded = false;
  peopleArray: any = [];
  constructor(private testeService: TesteService) { }

  ngOnInit(): void {
    // this.getPeople()
    this.setInterval();
  }
  setInterval() {
    setInterval(() => {
      this.loaded = true;
    }, 1000);
    this.getPeople();
    // this.getPeopleById();
  }
  getPeople() {
    this.testeService.getPeople().subscribe(res => {
      const url = 'https://swapi.dev/api/people/'
      for (let peopleById = 1; peopleById <= res.count + 1; peopleById++) {
        this.peopleArray.push(url + res.results) //Passar o result
        //quando eu rolar a paginha fazer o chamado de pagina 2
      }
      this.peopleArray.forEach((element: any) => {
        console.log(element);
        this.testeService.getPeopleById(element).subscribe(res => {
          // console.log(res.name)
        })
      });
    })
  }
  // getPeopleById() {
  //   console.log('Entrei aqui!')
  //   // this.peopleArray.forEach((element: any) => {
  //   //   console.log('Cada elemento esta sendo passado aqui ', element);
  //   // });
  // }
}