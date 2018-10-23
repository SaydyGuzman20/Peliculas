import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagina1',
    templateUrl: './pagina1.component.html',
    styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {
    categorias:any = [
        {id: 1, name: 'Miedo', status: true},
        {id: 2, name: 'Comedia', status: false},
        {id: 3, name: 'Infantiles', status: false},
        {id: 4, name: 'Suspenso', status: true},
        {id: 5, name: 'Ciencia ficcion', status: true}
    ];
    constructor() { }
    ngOnInit() { }
}
