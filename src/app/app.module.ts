import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { ShareModule } from './shared/share.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ShareModule,
    CoreModule,
    HomeModule,
    NgProgressModule.withConfig({
      min: 20,
      fixed: true,
      color: 'green',
    }),
    NgProgressHttpModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-left',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
