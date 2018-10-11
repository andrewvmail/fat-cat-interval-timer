import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./pages/home/home.component";

export const COMPONENTS = [HomeComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(homeTab:home//)", pathMatch: "full" },

    { path: "home", component: HomeComponent, outlet: "homeTab" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
