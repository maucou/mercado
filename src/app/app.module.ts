import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MenuNavComponent } from './components/shared/menu-bar/menu-nav/menu-nav.component';
import { MenuLogoComponent } from './components/shared/menu-bar/menu-logo/menu-logo.component';
import { MenuBarComponent } from './components/shared/menu-bar/menu-bar.component';
import { LoginButtonComponent } from './components/shared/menu-bar/login-button/login-button.component';
import { ProductsComponent } from './pages/products/products.component';
import { MainContentHomeComponent } from './components/main-content-home/main-content-home.component';
import { CardProductComponent } from './components/main-content-home/card-product/card-product.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    HomeComponent,
    FooterComponent,
    MenuNavComponent,
    MenuLogoComponent,
    MenuBarComponent,
    LoginButtonComponent,
    ProductsComponent,
    MainContentHomeComponent,
    CardProductComponent,
    ImageCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
