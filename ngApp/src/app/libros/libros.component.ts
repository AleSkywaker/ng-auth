import { Component, OnInit } from '@angular/core';
import { LibrosService } from './../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  librosData = [];
  constructor(private libros: LibrosService) {}

  ngOnInit() {
    this.libros.getLibros().subscribe(
      libros => {
        this.librosData = libros;
        console.log(libros);
      },
      err => console.log(err)
    );
  }
}
