import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  tahta:Array<{name:string}>=[];
  tahtaSize:number;

  createTable(value)
  {
    this.tahta=[];
    for(let i=0;i<value;i+=1)
    {
      if(i%2==0)
      this.tahta.push({name:'siyah'});
      else
      this.tahta.push({name:'beyaz'});
    }
  }
  ngOnInit(): void {
  }

}
