import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailSuggComponent } from './features/suggestions/detail-sugg/detail-sugg.component';

const routes: Routes = [
  {path:'products', component : HomeComponent},
 // {path :'suggestion' , component : ListSuggestionComponent},
  {path :'suggestion/detail/:id' , component : DetailSuggComponent},
  {path:'', redirectTo :'products' ,pathMatch:'full'},
  { path: 'suggestions', loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule) },

    {path:'**' ,component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
