import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { ProductComponent } from './header/product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './header/service/service.component';
import { ContactComponent } from './header/contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { LaptopComponent } from './header/product/laptop/laptop.component';
import { TelevisionComponent } from './header/product/television/television.component';
import { MobileComponent } from './header/product/mobile/mobile.component';
import { WashingmachineComponent } from './header/product/washingmachine/washingmachine.component';
import { SubmitComponent } from './header/contact/submit/submit.component';
import { PagenotfoundComponent } from './header/pagenotfound/pagenotfound.component';
import { BuyproductComponent } from './header/buyproduct/buyproduct.component';
import { CheckoutComponent } from './header/buyproduct/checkout/checkout.component';
import { BottombarComponent } from './header/bottombar/bottombar.component';


const myroutes:Routes=[
  {path:"", redirectTo:"/" ,pathMatch:"full"},
  {path:"",component:HomeComponent},
  {path:"product",component:ProductComponent ,children:[
      //  {path:"",component:ProductComponent},//localhost:4200/product
       {path:"laptop",component:LaptopComponent},
       {path:"television",component:TelevisionComponent},
       {path:"mobile",component:MobileComponent},
       {path:"washingmachine",component:WashingmachineComponent},

  ]},
  {path:"service",component:ServiceComponent},
  {path:"contact",children:[

      {path:"",component:ContactComponent},
      {path:"submitted",component:SubmitComponent},
  ]},

  { path: 'buyproduct',  children:[
  { path: '', component: BuyproductComponent },
  { path: 'checkout', component: CheckoutComponent },
  ]},
  { path: '**', component: PagenotfoundComponent },


]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    FooterComponent,
    ServiceComponent,
    ContactComponent,
    LaptopComponent,
    TelevisionComponent,
    MobileComponent,
    WashingmachineComponent,
    SubmitComponent,
    PagenotfoundComponent,
    BuyproductComponent,
    CheckoutComponent,
    BottombarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
