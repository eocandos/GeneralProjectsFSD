import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeScriptComponent } from './type-script/type-script.component';
import { FormsComponent } from './forms/forms.component';
import { GeneralComponentComponent } from './general-component/general-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeScriptComponent,
    FormsComponent,
    GeneralComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
