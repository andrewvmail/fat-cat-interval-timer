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
import { ListPicker } from "tns-core-modules/ui/list-picker";

let pokemonList = [
  "Bulbasaur",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Arcanine",
  "Poliwrath",
  "Machoke"
];

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
  @ViewChild("control") control;
  prevDeltaX = 0;
  public pokemons: Array<string> = [];
  public picked: string;


  public hours = Array(23).join().split(',').map(function(a){return this.i++},{i:1});
  public minutes = Array(59).join().split(',').map(function(a){return this.i++},{i:1});
  public seconds = Array(59).join().split(',').map(function(a){return this.i++},{i:1});

  constructor(private cdr: ChangeDetectorRef, private controller: AppService) {
    super(cdr, controller);
    console.log('constructor')
    if(isIOS) {
      statusBar.hide();
    }
    for (let i = 0; i < pokemonList.length; i++) {
      this.pokemons.push(pokemonList[i]);
    }
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
  public selectedIndexChanged(args) {
    console.log('hello')

    // let picker = <ListPicker>args.object;
    // this.picked = this.pokemons[picker.selectedIndex];
  }
}
