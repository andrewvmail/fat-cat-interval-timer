import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "../pages/home/home.component";
import { TimerComponent } from "~/app/pages/timer/timer.component";

export const COMPONENTS = [HomeComponent, TimerComponent];

const routes: Routes = [
  { path: "", redirectTo: "/timer", pathMatch: "full" },
  { path: "timer", component: TimerComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
