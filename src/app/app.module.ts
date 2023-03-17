import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { TableGeneratorComponent } from './tables/table-generator/table-generator.component';
import { MatrixGeneratorComponent } from './matrixes/matrix-generator/matrix-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TableGeneratorComponent,
    MatrixGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
