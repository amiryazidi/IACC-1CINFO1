import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuggestionService } from '../../../services/suggestion.service';
import { Suggestion } from '../../../models/Suggestion';

@Component({
  selector: 'app-detail-sugg',
  templateUrl: './detail-sugg.component.html',
  styleUrl: './detail-sugg.component.css'
})
export class DetailSuggComponent {

  id!:number
  suggestion !: Suggestion
  constructor(private Act : ActivatedRoute, private sugS : SuggestionService){}

  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    // recuperer l'objet
    //this.suggestion=this.sugS.suggestions[this.id]
    this.suggestion=this.sugS.suggestions.find(s => s.id == this.id)!

    console.log(this.id)
  }

  
}
