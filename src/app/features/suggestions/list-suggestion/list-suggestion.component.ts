import { Component } from '@angular/core';
import { Suggestion } from '../../../models/Suggestion';
import { SuggestionService } from '../../../services/suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {
suggestions: Suggestion[] = []

constructor(private sugS : SuggestionService){}

 ngOnInit(){
  this.suggestions= this.sugS.suggestions
 }
}

