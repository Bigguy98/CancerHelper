import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { NavItemComponent } from './layouts/nav-item/nav-item.component';
import { PredictFormComponent } from './layouts/predict-form/predict-form.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DemoMaterialModule } from './layouts/material-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Overlay, OverlayContainer, ToastrModule, ToastrService } from 'ngx-toastr';
import { DauhieunhanbietComponent } from './content/static/dauhieunhanbiet/dauhieunhanbiet.component';
import { HachbachhuyetComponent } from './content/static/hachbachhuyet/hachbachhuyet.component';
import { LydosunghbhComponent } from './content/static/lydosunghbh/lydosunghbh.component';
import { UngthuphoiComponent } from './content/static/ungthuphoi/ungthuphoi.component';
import { UngthuComponent } from './content/static/ungthu/ungthu.component';
import { SurvivalMonthComponent } from './layouts/statistic/survival-month/survival-month.component';
import { DeadRateComponent } from './layouts/statistic/dead-rate/dead-rate.component';
import { QuestionComponent } from './layouts/ans-ques/question/question.component';
import { QuestionDetailComponent } from './layouts/ans-ques/question-detail/question-detail.component';
import { CreateQuesModalComponent } from './layouts/modals/create-ques-modal/create-ques-modal.component';
import { LoginPageComponent } from './layouts/login-page/login-page.component';
import { MainComponent } from './layouts/main/main.component';
import { UserRouteAccessService } from './services/auth.service';
import { AuthInterceptor } from './security/auth.interceptor';


const routes: Routes = [
  
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "",
    component: MainComponent,
    canActivate: [UserRouteAccessService],
    children: [
      {
        path: "",
        component: QuestionComponent
      },
      {
        path: "predict",
        component: PredictFormComponent
      },
      {
        path: "info/dauhieunhanbiet",
        component: DauhieunhanbietComponent
      },
      {
        path: "info/hachbachhuyet",
        component: HachbachhuyetComponent
      },
      {
        path: "info/lydosunghbh",
        component: LydosunghbhComponent
      },
      {
        path: "info/ungthuphoi",
        component: UngthuphoiComponent
      },
      {
        path: "info/ungthu",
        component: UngthuComponent
      },
      {
        path: "statistis/sv",
        component: SurvivalMonthComponent
      },
      {
        path: "statistis/dr",
        component: DeadRateComponent
      }
    ]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavItemComponent,
    PredictFormComponent,
    DashboardComponent,
    DauhieunhanbietComponent,
    HachbachhuyetComponent,
    LydosunghbhComponent,
    UngthuphoiComponent,
    UngthuComponent,
    SurvivalMonthComponent,
    DeadRateComponent,
    QuestionComponent,
    QuestionDetailComponent,
    CreateQuesModalComponent,
    LoginPageComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    DemoMaterialModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000,
      positionClass: "toast-center-center"
    }),
  ],
  providers: [ToastrService, Overlay, OverlayContainer,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [CreateQuesModalComponent]
})
export class AppModule { }
