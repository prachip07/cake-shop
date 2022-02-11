import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'products', component: ProductsComponent },
{ path: 'blogs', component: BlogsComponent },
{ path: 'careers', component: CareersComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'booking',component:BookingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
