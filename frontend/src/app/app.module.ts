import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//imported
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/pages/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmeComponent } from './components/pages/filme/filme.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { PeopleComponent } from './components/pages/people/people.component';
import {MatSortModule} from '@angular/material/sort';
import {OrderModule} from 'ngx-order-pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { FilmeDialogComponent } from './components/dialogs/filme-dialog/filme-dialog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {SeletonLoaderModule} from './components/seleton-loader/seleton-loader.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { TesteComponent } from './components/pages/teste/teste.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    FilmeComponent,
    PeopleComponent,
    FilmeDialogComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatGridListModule,
    MatSortModule,
    OrderModule,
    NgbModule,
    MatDialogModule,
    MatExpansionModule,
    SeletonLoaderModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
