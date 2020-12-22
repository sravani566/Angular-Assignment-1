import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { MypipePipe } from './mypipe.pipe';
import { HobbyComponent } from './hobby/hobby.component';
import { HobbicmpComponent } from './hobbicmp/hobbicmp.component';
import { DataService } from './dataservice.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    MypipePipe,
    HobbyComponent,
    HobbicmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
