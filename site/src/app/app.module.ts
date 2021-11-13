import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhpComponent } from './views/php/php.component';
import { KotlinComponent } from './views/kotlin/kotlin.component';
import { JavascriptComponent } from './views/javascript/javascript.component';

@NgModule({
  declarations: [
    AppComponent,
    PhpComponent,
    KotlinComponent,
    JavascriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
