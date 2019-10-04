import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './body/carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { ProcedureComponent } from './body/procedure/procedure.component';
import { TrainingTopicsComponent } from './body/training-topics/training-topics.component';
import { FooterComponent } from './footer/footer.component';
import { ExpertsComponent } from './body/experts/experts.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    ProcedureComponent,
    TrainingTopicsComponent,
    FooterComponent,
    ExpertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
