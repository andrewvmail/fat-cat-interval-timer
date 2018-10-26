import { Component, Input, OnInit } from "@angular/core";
import { createArrayOfNumbers } from "~/app/utils";

@Component({
  selector: "timer-control",
  moduleId: module.id,
  templateUrl: "./timer-control.component.html"
})
export class TimerControlComponent implements OnInit {
  @Input() activity;

  @Input() minutesFrom;
  @Input() minutesTo;
  @Input() secondsFrom;
  @Input() secondsTo;
  label;
  minutes;
  seconds;

  constructor() {}

  ngOnInit(): void {
    if (this.activity === "walking") {
      this.label = "Walk";
    }
    if (this.activity === "running") {
      this.label = "Run";
    }
    if (this.activity === "sprinting") {
      this.label = "Sprint";
    }
    this.minutes = createArrayOfNumbers(this.minutesFrom, this.minutesTo);
    this.seconds = createArrayOfNumbers(this.secondsFrom, this.secondsTo);
  }

  selectedIndexChanged() {}
}
