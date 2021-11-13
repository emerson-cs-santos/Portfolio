import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './views/javascript/javascript.component';
import { KotlinComponent } from './views/kotlin/kotlin.component';
import { PhpComponent } from './views/php/php.component';

const routes: Routes =
[
  { path: 'javascript', component: JavascriptComponent }
  ,{ path: 'kotlin', component: KotlinComponent }
  ,{ path: 'php', component: PhpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
