import { LibrosService } from './../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros-pro',
  templateUrl: './libros-pro.component.html',
  styleUrls: ['./libros-pro.component.css']
})
export class LibrosProComponent implements OnInit {
  librosPro = [];
  constructor(private librosProService: LibrosService) {}

  ngOnInit() {
    this.librosProService.getLibrosPro().subscribe(
      libros => {
        this.librosPro = libros;
      },
      err => console.log(err)
    );
  }
}
