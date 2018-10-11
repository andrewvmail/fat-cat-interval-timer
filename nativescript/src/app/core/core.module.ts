import { NgModule } from "@angular/core";
import { DataService } from "./data.service";

require('nativescript-websockets');

@NgModule({
    providers: [
        DataService
    ]
})
export class CoreModule { }
