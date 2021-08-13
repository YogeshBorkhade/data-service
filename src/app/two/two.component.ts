import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  botInfo: any = {};

  constructor(private dataService: DataService) {
    this.getIntel();
  }

  getIntel() {
    this.botInfo = this.dataService.getIntel();
  }

  ngOnInit() {}
}
