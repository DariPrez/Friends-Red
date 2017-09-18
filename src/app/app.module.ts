import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileIndexComponent } from './profile-index/profile-index.component';
import { ProfileIndexService } from './profile-index/profile-index.service';
import { PostIndexComponent } from './post-index/post-index.component';
import { StuffComponent } from './stuff/stuff.component';
import { ProfileComponent } from './stuff/profile/profile.component';
import { PostComponent } from './post-index/post/post.component';
import { PostService } from './post-index/post/post.service';


const appRoutes: Routes = [
  { path: 'posts', component: PostIndexComponent },
  {
    path: 'stuff', component: StuffComponent,
  },
  { path: '',
    redirectTo: '/stuff',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileIndexComponent,
    PostComponent,
    PostIndexComponent,
    StuffComponent,
    ProfileComponent
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
  providers: [
    ProfileIndexService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
