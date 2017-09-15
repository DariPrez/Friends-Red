import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileIndexComponent } from './profile-index/profile-index.component';
import { ProfileIndexService } from './profile-index/profile-index.service';


const appRoutes: Routes = [
  // { path: 'order', component: OrderComponent },
  {
    path: 'profile',
    component: ProfileIndexComponent,
    data: { title: 'Cats List' }
  },
  { path: '',
    redirectTo: '/item-list',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  providers: [ProfileIndexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
