import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableGeneratorComponent} from "./tables/table-generator/table-generator.component";
import {MatrixGeneratorComponent} from "./matrixes/matrix-generator/matrix-generator.component";
import {HomepageComponent} from "./shared/homepage/homepage.component";

const routes: Routes = [
  {
    path: 'tables', component: TableGeneratorComponent
  },
  {
    path: 'matrixes', component: MatrixGeneratorComponent
  },
  {
    path: 'home', component: HomepageComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
