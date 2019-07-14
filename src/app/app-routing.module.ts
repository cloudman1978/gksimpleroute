import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component'
import { ParisComponent } from './paris/paris.component';
import { LyonComponent } from './lyon/lyon.component';
import { MarseilleComponent } from './marseille/marseille.component';
const routes: Routes = [  
  { path: 'paris', component: ParisComponent },
  { path: 'lyon', component: LyonComponent },
  { path: 'marseille', component: MarseilleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
