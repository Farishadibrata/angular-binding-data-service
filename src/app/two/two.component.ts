import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  myData : Object
  
  constructor(private dataService: DataService) {
      this.dataService.DataSubject.subscribe(data => {
        this.myData = data
      })
   }

  ngOnInit(): void {
  }
  changeValue() : void{
    this.dataService.setData('Halo')
  }
  
}
