// this needs to run before connect decorator because cerebral uses process.env.NODE_ENV and its missing in {NS}
import { AbsoluteLayout } from "tns-core-modules/ui/layouts/absolute-layout";

require("nativescript-nodeify");

import statusBar = require("nativescript-status-bar");
import { device, isAndroid, isIOS, screen } from "tns-core-modules/platform";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, OnInit,
  ViewChild
} from "@angular/core";
import { connect, AppService, CerebralComponent } from "@cerebral/angular";
import { sequences, state } from "cerebral/tags";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { createArrayOfNumbers } from "~/app/utils";
import { TimerControlComponent } from "~/app/components/timer-control/timer-control";
import { RouterExtensions } from "nativescript-angular";

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
export class AppComponent extends CerebralComponent  {
  constructor(
    private routerExtensions: RouterExtensions,
    private cdr: ChangeDetectorRef,
    private controller: AppService
  ) {
    super(cdr, controller);
    if (isIOS) {
      statusBar.hide();
    }
  }
  onInit() {
    this.routerExtensions.navigate(["/timer"], { clearHistory: true });
    console.log('onInit');
  }
}
