import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component'
import { AboutUsComponent } from './component/about-us/about-us.component'
import { SettingsComponent } from './component/settings/settings.component'
import { HeaderComponent } from "./component/header/header.component";
const routes: Routes = [
    {
        path: '', component: HeaderComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutUsComponent },
            { path: 'language', component: SettingsComponent },
        ]
    },
    { path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
