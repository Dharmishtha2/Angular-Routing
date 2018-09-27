import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoute: Routes = [
    { path:'', component: HomeComponent},
    { path:'users', component: UsersComponent, children:[
      //{ path:'users/:id', component: UserComponent},
      { path:':id/:name', component: UserComponent}
    ]},
  
    //{ path:'server/:id', component: ServerComponent},
    { path:'servers', component: ServersComponent, children: [  
      { path:':id', component: ServerComponent},
     // { path:'server/:id', component: ServerComponent},
      { path:':id/edit', component: EditServerComponent}
    ]},
    { path:'**', component: PageNotFoundComponent}
  
  ];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ]
        exports: [routingModule]


})
export class appRoutingModule{

}