import { Component, OnInit } from '@angular/core';
import { EpService } from '../ep.service';

@Component({
  selector: 'app-eplist',
  templateUrl: './eplist.component.html',
  styleUrls: ['./eplist.component.css']
})
export class EplistComponent implements OnInit {
  
  eplist = []

  constructor(private epService:EpService) { }

  ngOnInit(): void {
    this.epService.getAllEP().subscribe(
      result=>{
        this.eplist = result
      },
      error=>{
        console.log(error);
      }
    )
  }

}
