import { Component } from "@angular/core";
import { ListPicker } from "tns-core-modules/ui/list-picker";

let pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
  "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
  moduleId: module.id,
  templateUrl: "./list.component.html"
})
export class CreatingListPickerComponent {

  public pokemons: Array<string> = [];
  public picked: string;

  constructor() {
    for (let i = 0; i < pokemonList.length; i++) {
      this.pokemons.push(pokemonList[i]);
    }
  }

  public selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.picked = this.pokemons[picker.selectedIndex];
  }
}