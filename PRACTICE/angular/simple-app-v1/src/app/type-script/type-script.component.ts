import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-script',
  templateUrl: './type-script.component.html',
  styleUrls: ['./type-script.component.css']
})
export class TypeScriptComponent implements OnInit {

  // person: Person;
  array: string[] = ['1', '2', '3'];

  constructor() { }

  ngOnInit() {

    let pokemons = [
      { name: "pikachu", type: "electric" },
      { name: "charmander", type: "fire" },
      { name: "bulbasaur", type: "grass" },
      { name: "squirtle", type: "water" },
      { name: "flareon", type: "fire" },
      { name: "jolteon", type: "electric" }
    ];

    const names = [];
    for (let i = 0; i < pokemons.length; i++) {
      names.push(pokemons[i].name);
    }

    const types = pokemons.map(p =>  p.type );
    // console.log(types);

    const nameFilters = pokemons.filter( (p) => { return p.name === 'flareon'} );
    // console.log(nameFilters);

    const b = this.array.map(Number);
    // console.log(b);

    let [name, type] = pokemons; 

    console.log(name, type);

    class Person {
      id: number | string;
      name: string;
      phoneNumber: string | string[];
    }
    
    const per = new Person();
    per.phoneNumber = '12345';

    console.log(per);
  
  }



  /*
  person = new Person(1, '');

  p(person);

  p(mss: any) {
    console.log(mss);
  }*/
}
