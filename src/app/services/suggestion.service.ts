import { Injectable } from '@angular/core';
import { Suggestion } from '../models/Suggestion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {


  suggestions: Suggestion[] = [
  {
  id: 1,
  title: 'Organiser une journée team building',
  description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de léquipe.',
  category: 'Événements',
  date: new Date('2025-01-20'),
  status: 'acceptee',
  nbLikes:10
  },
  {
  id: 2,
  title: 'Améliorer le système de réservation',
  description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
  category: 'Technologie',
  date: new Date('2025-01-15'),
  status: 'refusee',
  nbLikes:0

  },
  {
  id: 3,
  title: 'Créer un système de récompenses',
  description: 'Mise en place dun programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
  category: 'Ressources Humaines',
  date: new Date('2025-01-25'),
  status: 'refusee',
  nbLikes:0
  },
  {
  id: 4,
  title: 'Moderniser linterface utilisateur',
  description: 'Refonte complète de linterface utilisateur pour une meilleure expérience utilisateur.',
  category: 'Technologie',
  date: new Date('2025-01-30'),
  status: 'en_attente',
  nbLikes:0
  },
  ];

  constructor(private http: HttpClient) { }

  getsuggestion(){
    return this.http.get<Suggestion[]>('http://localhost:3000/suggestions');
  }
  getSuggestionById(id: number){
    return this.http.get<Suggestion>(`http://localhost:3000/suggestions/${id}`);
  }
  AddSuggestion(suggestion: Suggestion){
    return this.http.post('http://localhost:3000/suggestions', suggestion);
  }
  DeleteSuggestion(id: number){
    return this.http.delete('http://localhost:3000/suggestions/' + id);
  }
  UpdateSuggestion(suggestion: Suggestion,id:number){
    return this.http.put(`http://localhost:3000/suggestions/${id}`, suggestion);
  }
}
