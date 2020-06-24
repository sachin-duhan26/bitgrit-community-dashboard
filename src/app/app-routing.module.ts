import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component'
import { AboutUsComponent } from './component/about-us/about-us.component'
import { SettingsComponent } from './component/settings/settings.component'
import { ThemeSetterComponent } from './component/theme-setter/theme-setter.component'
import { HeaderComponent } from "./component/header/header.component";
const routes: Routes = [
    {
        path: '', component: HeaderComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutUsComponent },
            { path: 'theme', component: ThemeSetterComponent },
            { path: 'language', component: SettingsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
