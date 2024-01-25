import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { PipesModule } from './pages/pipes/pipes.module';
import { RxjsExampleModule } from './pages/rxjs-example/rxjs-example.module';
import { RxjsIntroduccionModule } from './pages/rxjs-introduccion/rxjs-introduccion.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { MatListModule } from '@angular/material/list';
import { UserDetailComponent } from './pages/users/pages/user-detail/user-detail.component';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    CategoriesModule,
    PipesModule,
    RxjsExampleModule,
    RxjsIntroduccionModule,
    MatListModule,
    // dashboard
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:id',
        component: UserDetailComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ]),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
