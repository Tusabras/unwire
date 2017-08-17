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
import { GlobalService } from './shared/global.service';
import { FiltersComponent } from './home/filters/filters.component';
import { ColorComponent } from './home/filters/color/color.component';
import { SizeComponent } from './home/filters/size/size.component';
import { ShopComponent } from './shop/shop.component';
import { ShopModalComponent } from './shop/shop-modal/shop-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ListBlogsComponent,
    BlogComponent,
    ItemDetailsComponent,
    FiltersComponent,
    ColorComponent,
    SizeComponent,
    ShopComponent,
    ShopModalComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpModule 
  ],
  providers: [ClothesService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 