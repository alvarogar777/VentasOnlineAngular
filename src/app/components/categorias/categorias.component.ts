import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './service/categoria-service.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html'
})
export class CategoriasComponent implements OnInit {
  categorias : any[] = [];

  constructor(private _categoriaService : CategoriaService) { 
    this._categoriaService.getCategorias().subscribe((data : any) => {
      this.categorias= data;
    });
  }

  ngOnInit() {
  }

}
