import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './book-gallery/home/home.component';
import { MyBooksComponent } from './book-gallery/my-books/my-books.component';
import { ReadBookComponent } from './book-gallery/read-book/read-book.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"book-gallery",
    children:[
      {
        path:"my-content",
        component:MyBooksComponent,
        pathMatch:"full"
      },
      {
        path:"view-pdf/:id",
        component:ReadBookComponent,
        pathMatch:"full"
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
