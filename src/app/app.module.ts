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
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
