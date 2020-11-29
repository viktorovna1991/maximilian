import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './system/main/main.component';
import {GenderComponent} from './system/main/gender/gender.component';
import {WomenComponent} from './system/main/women/women.component';
import {ChildrenComponent} from './system/main/children/children.component';
import {FitnessComponent} from './system/main/fitness/fitness.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'gender', component: GenderComponent},
  {path: 'children', component: ChildrenComponent},
  {path: 'women', component: WomenComponent},
  {path: 'fitness', component: FitnessComponent},
  {path: 'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
