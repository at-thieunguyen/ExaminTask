import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AboutComponent } from './about/about.component';
import { WhychooseusComponent } from './whychooseus/whychooseus.component';
import { SlideenrollComponent } from './slideenroll/slideenroll.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';
import { TopcategoriesComponent } from './topcategories/topcategories.component';
import { ExperienceAdvisorsComponent } from './experience-advisors/experience-advisors.component';
import { FunFactorComponent } from './fun-factor/fun-factor.component';
import { EventComponent } from './event/event.component';
import { RegisterComponent } from './register/register.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AdvisorComponent } from './advisor/advisor.component';
import { AdvisorDetailComponent } from './advisor-detail/advisor-detail.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    AboutComponent,
    WhychooseusComponent,
    SlideenrollComponent,
    FooterComponent,
    PopularCoursesComponent,
    TopcategoriesComponent,
    ExperienceAdvisorsComponent,
    FunFactorComponent,
    EventComponent,
    RegisterComponent,
    TestimonialsComponent,
    BlogComponent,
    CoursesComponent,
    HomeComponent,
    CoursesDetailComponent,
    ContactComponent,
    AdvisorComponent,
    AdvisorDetailComponent,
    FormRegisterComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
