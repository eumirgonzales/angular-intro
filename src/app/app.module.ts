import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { WorkComponent } from './profile-list/work/work.component';
// import { Route } from '@angular/compiler/src/core';
import { SettingsComponent } from './settings/settings.component';
import { Routes, RouterModule } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { ChildComponent } from './child-component/child-component.component';
import { HttpClientModule } from '@angular/common/http';
// import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';

// const appRoutes : Routes = [
//   {path: '', component: ProfileListComponent},
//   {path: 'settings', component: SettingsComponent}
// ];

const appRoutes: Routes = [
  { path: '', component: NewComponentComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: 'child/:id',
        component: ChildComponent
      }
    ]
  },
  { path: 'profile', component: ProfileListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ProfileListComponent,
    WorkComponent,
    SettingsComponent,
    NewComponentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
//1 Import HTTP Client Module, and reference
// HttpClientModule
