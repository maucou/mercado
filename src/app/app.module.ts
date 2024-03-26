import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HomeComponent } from './home/pages/home/home.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { ProductsComponent } from './home/pages/products/products.component';
import { MainContentHomeComponent } from './shared/components/main-content-home/main-content-home.component';
import { CardProductComponent } from './shared/components/main-content-home/card-product/card-product.component';
import { ImageCarouselComponent } from './shared/components/image-carousel/image-carousel.component';
import { AboveHeaderComponent } from './shared/layout/above-header/above-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    MainContentHomeComponent,
    CardProductComponent,
    ImageCarouselComponent,
    AboveHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
