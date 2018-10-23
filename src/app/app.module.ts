import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { HeaderComponent } from './header/header.component';
import { FouterComponent } from './fouter/fouter.component';
import { HomeComponent } from './home/home.component';


const appRoutes:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pagina1/:id_p', component: Pagina1Component},
    {path: 'pagina2/:id_p', component: Pagina2Component}
];

@NgModule({
    declarations: [
        AppComponent,
        Pagina1Component,
        Pagina2Component,
    HeaderComponent,
    FouterComponent,
    HomeComponent
    
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
