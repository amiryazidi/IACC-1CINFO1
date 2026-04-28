import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-sugg',
  templateUrl: './detail-sugg.component.html',
  styleUrl: './detail-sugg.component.css'
})
export class DetailSuggComponent {

  id!:number
  constructor(private Act : ActivatedRoute){}

  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    console.log(this.id)
  }
}
