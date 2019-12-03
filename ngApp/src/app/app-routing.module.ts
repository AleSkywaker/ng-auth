import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { LibrosProComponent } from "./libros-pro/libros-pro.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LibrosComponent } from "./libros/libros.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/libros", pathMatch: "full" },
  {
    path: "libros",
    component: LibrosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "librosPro",
    component: LibrosProComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
