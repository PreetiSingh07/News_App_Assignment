import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchChannelComponent } from './search-channel/search-channel.component';
import { SerchNewsListComponent } from './serch-news-list/serch-news-list.component';
import { ShowNewsListComponent } from './show-news-list/show-news-list.component';
import { AddToFavoriteComponent } from './add-to-favorite/add-to-favorite.component';
import { AppRoutingModule } from './app-routing.module';
import { FavouriteDetailComponent } from './favourite-detail/favourite-detail.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchChannelComponent,
    SerchNewsListComponent,
    ShowNewsListComponent,
    AddToFavoriteComponent,
    FavouriteDetailComponent,
    LoginComponent,
    SignUpComponent

  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
