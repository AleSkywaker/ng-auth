import { LibrosService } from "./../services/libros.service";
import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-libros-pro",
  templateUrl: "./libros-pro.component.html",
  styleUrls: ["./libros-pro.component.css"]
})
export class LibrosProComponent implements OnInit {
  librosPro = [];
  constructor(private librosProService: LibrosService, private route: Router) {}

  ngOnInit() {
    this.librosProService.getLibrosPro().subscribe(
      libros => {
        this.librosPro = libros;
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.route.navigate(["/login"]);
          }
        }
      }
    );
  }
}
