// this needs to run before connect decorator because cerebral uses process.env.NODE_ENV and its missing in {NS}
require("nativescript-nodeify");

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from "@angular/core";
import { connect, AppService, CerebralComponent } from "@cerebral/angular";

import { sequences, state } from "cerebral/tags";

@Component({
  selector: "ns-app",
  moduleId: module.id,
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@connect({
  text: state(["text"]),
  walk: state(["settings.walk"]),
  run: state(["settings.run"]),
  sprint: state(["settings.sprint"]),
  buttonText: state(["buttonText"]),
  start: sequences(["start"]),
  stop: sequences(["stop"]),
  onSliderChange: sequences(["onSliderChange"])
})
export class AppComponent extends CerebralComponent {
  constructor(private cdr: ChangeDetectorRef, private controller: AppService) {
    super(cdr, controller);
  }
  floor(int) {
    return Math.floor(int);
  }
}
