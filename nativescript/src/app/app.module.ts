import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule, COMPONENTS } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";

import { AppService } from '@cerebral/angular'
import AppFactory from "./main"

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        CoreModule
    ],
    declarations: [
        AppComponent,
        ...COMPONENTS
    ],
    providers: [
      {
        provide: AppService,
        useFactory: AppFactory,
        deps: []
      },
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
