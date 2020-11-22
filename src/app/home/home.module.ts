import { NgModule } from '@angular/core';
import { ShareModule } from 'app/shared/share.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, ShareModule],
})
export class HomeModule {}
