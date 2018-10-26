import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "Timer",
  moduleId: module.id,
  templateUrl: "./timer.component.html"
})
export class TimerComponent implements OnInit {
  constructor(private router: RouterExtensions) {}

  ngOnInit(): void {}
}
