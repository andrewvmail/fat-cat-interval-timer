import { NgModule } from "@angular/core";
import { DataService } from "./data.service";

require("nativescript-nodeify");

@NgModule({
    providers: [
        DataService
    ]
})
export class CoreModule { }
