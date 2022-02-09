import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BackendService} from './backend.service';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { DetailWrapperComponent } from './detail-wrapper/detail-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    DetailWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
