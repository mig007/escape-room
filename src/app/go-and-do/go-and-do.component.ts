import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../grid-data.service';
import { GridData } from '../grid-data';

@Component({
  selector: 'app-go-and-do',
  templateUrl: './go-and-do.component.html',
  styleUrls: ['./go-and-do.component.less']
})
export class GoAndDoComponent implements OnInit {

  constructor(private gridDataService:GridDataService) { }

  data: GridData[][] = [];

  ngOnInit(): void {

    this.loadData();
    
  }
  loadData(): void {
    this.gridDataService.getData().subscribe(data => {
      this.data = data;
    });
  }
  reset() {
    this.data.forEach((row) => {
      row.forEach((x) => {
        x.selected = false;
      });
    });
  }
}

