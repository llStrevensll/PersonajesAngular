import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { PersonajeComponent } from "./components/personaje/personaje.component";


const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'personajes', component: PersonajesComponent},
    {path: 'personaje/:id', component: PersonajeComponent} ,
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);