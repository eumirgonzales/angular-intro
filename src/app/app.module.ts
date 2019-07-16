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
import { Routes, RouterModule} from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
// import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';

// const appRoutes : Routes = [
//   {path: '', component: ProfileListComponent},
//   {path: 'settings', component: SettingsComponent}
// ];

const appRoutes : Routes = [
  {path : '', component : NewComponentComponent },
  {path : 'settings', component : SettingsComponent },
  {path : 'profile', component :  ProfileListComponent},
]

// http://localhost:4200/settings

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ProfileListComponent,
    WorkComponent,
    SettingsComponent,
    NewComponentComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


// imports , RouterModule.forRoot(appRoutes)
