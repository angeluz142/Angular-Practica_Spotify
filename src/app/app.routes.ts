import { Routes } from "@angular/router";

import { HomeComponent  } from "./components/home/home.component";
import { SearchComponent  } from "./components/search/search.component";
import { ArtistaComponent } from './components/artista/artista.component';



export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: 'search', pathMatch:'full', redirectTo: 'home' },
    { path: '**', pathMatch:'full', redirectTo: 'home'  }
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class FeatureRoutingModule {}
