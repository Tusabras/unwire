import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing-module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ListBlogsComponent } from './home/list-blogs/list-blogs.component';
import { BlogComponent } from './home/list-blogs/blog/blog.component';
import { HttpModule } from '@angular/http';
import { ItemDetailsComponent } from './item-details/item-details.component';
// import { RouterModule } from '@angular/router';
import { ClothesService } from './shared/clothes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ListBlogsComponent,
    BlogComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule 
  ],
  providers: [ClothesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
