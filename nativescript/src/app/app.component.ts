// this needs to run before connect decorator because cerebral uses process.env.NODE_ENV and its missing in {NS}
import { AbsoluteLayout } from "tns-core-modules/ui/layouts/absolute-layout";

require("nativescript-nodeify");

import statusBar = require("nativescript-status-bar");
import { GestureEventData } from "tns-core-modules/ui/gestures";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild
} from "@angular/core";
import { connect, AppService, CerebralComponent } from "@cerebral/angular";
import { sequences, state } from "cerebral/tags";

@Component({
  selector: "ns-app",
  moduleId: module.id,
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"]
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
  @ViewChild("control") control;
  prevDeltaX = 0;

  constructor(private cdr: ChangeDetectorRef, private controller: AppService) {
    super(cdr, controller);
    statusBar.hide();
  }
  onPan(args) {
    if (args.state === 1) {
      // finger down
    } else if (args.state === 2) {
      // finger panning
      AbsoluteLayout.setLeft(
        this.control.nativeElement,
        args.deltaX + this.prevDeltaX
      );
    } else if (args.state === 3) {
      // finger up
      this.prevDeltaX = args.deltaX;
    }
  }
}
