import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-one',
  templateUrl: 'one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  info = {
    name: 'Atom',
    ability: 'Show Stopper',
    weight: '614 LBS',
    generation: 'First',
    specialFeature: 'Shodow Move',
    signatureMove: 'Uppercut'
  };

  constructor(private dataService: DataService) {
    this.setInfo(this.info);
  }

  ngOnInit() {}

  selectBot(bot: string) {
    this.setInfo(this.info[bot]);
  }

  setInfo(info: any) {
    this.dataService.setIntel(info);
  }
}
