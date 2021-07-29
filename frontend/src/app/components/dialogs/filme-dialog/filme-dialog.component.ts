import { SwapiService } from './../../pages/swapi.service';
import { FilmeComponent } from './../../pages/filme/filme.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Filme } from '../../pages/filme/filme';
 

@Component({
  selector: 'app-filme-dialog',
  templateUrl: './filme-dialog.component.html',
  styleUrls: ['./filme-dialog.component.css']
})
export class FilmeDialogComponent implements OnInit {
  filmeDialogArray: any[] = [];
  speciesArray: any[] = [];
  panelOpenState = false;
  personagensArray: any [] = [];
  
  // showOrNot = true

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<FilmeDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any, 
    private filmesService:SwapiService, ){ }
  
  
 
  ngOnInit(): void {
    // console.log(this.data);
    // this.filmeInfo();
    // this.speciesInfo();
    this.infoFilme(this.data.planets, this.filmeDialogArray);
    this.infoFilme(this.data.species, this.speciesArray);
    this.infoFilme(this.data.characters, this.personagensArray);
    // console.log(this.personagensArray);

    //RETORNA O VALOR DOS IDs
    // this.data.characters.forEach((element: any) => { 
    //   let retorno = element.split("/")[5];
    //   console.log(retorno);
    // });

      
      // console.log(this.personagensArray.sort((a, b)=> (a.id < b.id ? 1:-1)));
  }
  
  infoFilme(url: any[], resultado:any){
    url.forEach((urlPlaneta:any) => {
      this.filmesService.getUrl(urlPlaneta).subscribe((planeta) => {
        resultado.push(planeta)
      })
    })
  }

  


  // filmeInfo(){
  //   this.data.planets.forEach((urlPlaneta:any) => {
  //     this.filmesService.getUrl(urlPlaneta).subscribe((planeta) => {
  //       this.filmeDialogArray.push(planeta)
  //     })
  //   })
  // }

  // speciesInfo(){
  //   this.data.species.forEach((urlSpecies:any) => {
  //     this.filmesService.getUrl(urlSpecies).subscribe((species) => {
  //       this.speciesArray.push(species)
  //     })
  //   })
  // }


  clickClose(): void {
    this.dialogRef.close();

  }

}
