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
 // this.suggestions= this.sugS.suggestions
 // afficher depuis la BD
 this.sugS.getsuggestion().subscribe({
  next : (data) =>this.suggestions = data,
  error : (err) => console.log(err),
  complete : () => console.log("suggestions loaded")
 })
 }

 delete(id:number){
  this.sugS.DeleteSuggestion(id).subscribe({
    next : (data) => {
      this.ngOnInit() // pour rafraichir la liste apres suppression
    },
    error : (err) => console.log(err),
    complete : () => console.log("suggestion deleted")
  })
 }
}

