import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  value : Object 
  constructor(private dataService: DataService) {
    this.dataService.DataSubject.subscribe(v => {
      this.value = v
    })
   }

  ngOnInit(): void {
  }
  changeValue() : void {
    this.dataService.setData('TESSSS')
  }
}
