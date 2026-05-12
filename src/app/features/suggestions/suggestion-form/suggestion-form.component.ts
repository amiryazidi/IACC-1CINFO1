import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuggestionService } from '../../../services/suggestion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/Suggestion';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent {

suggestions : Suggestion[] = [];
suggestionForm!: FormGroup;
id!: number;
suggestion !: Suggestion;
  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  constructor(
    private fb: FormBuilder,
    private suggService: SuggestionService,
    private route : Router,
    private act:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^[A-Z][a-zA-Z]*$/)
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(30)
      ]],
      category: ['', Validators.required],
      date: [{ value: new Date(), disabled: true }],
      status: [{ value: 'en attente', disabled: true }]
    });

    // 1-  recupere l'id de suggestion
      this.id=this.act.snapshot.params['id']
      //2- recuperer l'objet suggestion
      this.suggService.getSuggestionById(this.id).subscribe({
        next : (data) => {
          this.suggestion = data;
          this.suggestionForm.patchValue(data);
        }
      });
      // 3 - patchvalue pour afficher les données dans le formulaire
        this.suggestionForm.patchValue(this.suggestion)
  }

  get f() {
    return this.suggestionForm.controls;
  }



  onSubmit(): void {

    if(this.id){
      this.suggService.UpdateSuggestion(this.suggestionForm.value,this.id).subscribe({
        next : (data) => {
          console.log(data);
          this.route.navigate(['/suggestions'])
        },
        error : (err) => console.log(err),
        complete : () => console.log("suggestion updated")
      })
    }else {
this.suggService.AddSuggestion(this.suggestionForm.value).subscribe({
      next : (data) => {
        console.log(data);
        this.route.navigate(['/suggestions'])
      },
      error : (err) => console.log(err),
      complete : () => console.log("suggestion added")
    })
    }




  }

}
