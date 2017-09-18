import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouriteDetailComponent } from './favourite-detail/favourite-detail.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';

const routes: Routes = [
	{path:'search', component: HomeComponent},
	{path:'favourites', component: FavouriteDetailComponent },
	{path:'login', component: LoginComponent },
	{path:'signUp', component: SignUpComponent }
	

];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}