import { map } from 'rxjs/operators';
import { SwapiService } from './../swapi.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';
import {MatSortModule} from '@angular/material/sort';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { collectExternalReferences } from '@angular/compiler';
import { FilmeDialogComponent } from '../../dialogs/filme-dialog/filme-dialog.component';


@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  filmes: Filme[] = [];
  loaded = false;

  constructor(private swapiService: SwapiService, public dialog: MatDialog) { }

     
    public getImagem(numeroImagem: any)  {

      const imagens: any = {
        0:{url:"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"},
        1:{url:"https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg"},
        2:{url:"https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg"},
        3:{url:"https://m.media-amazon.com/images/I/51c6S4kGFmL.jpg"},
        4:{url:"https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg"},
        5:{url:"https://images-na.ssl-images-amazon.com/images/I/81g8vEs4ixL.jpg"},
  
      };
      return imagens[numeroImagem].url;
    }


  ngOnInit(): void {
    this.getAll();
    setInterval(() => {
      this.loaded = true;
    }, 2000);
  }
  
  getAll(){
    this.swapiService.getAll().subscribe(teste => this.filmes = (teste.results).sort((a: any,b: any) => a.episode_id - b.episode_id));
      
    // (teste => this.filmes = teste.results);
    // {return teste.episode_id, console.log(teste.)});  id.sort((a: any,b: any) => a.episode_id 
  }
  

  // episodio:any;

  openDialog(filme: any){    
    this.dialog.open(FilmeDialogComponent,{
      data: filme,
      height: '400px',
      width: '',
    });
  }

}



