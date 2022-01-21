import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjandarrayComponent } from './objandarray/objandarray.component';
import { JsonfetchComponent } from './jsonfetch/jsonfetch.component';
import { PipeComponent } from './pipe/pipe.component';
import { FilepipePipe } from './filepipe.pipe';
import { ApiComponent } from './api/api.component';
import { ImgapicallComponent } from './imgapicall/imgapicall.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AsyncComponent } from './async/async.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FlitertablePipe } from './flitertable.pipe';
import { DirectiveComponent } from './directive/directive.component';
import { ShowhideComponent } from './showhide/showhide.component';


@NgModule({
  declarations: [
    AppComponent,
    ObjandarrayComponent,
    JsonfetchComponent,
    PipeComponent,
    FilepipePipe,
    ApiComponent,
    ImgapicallComponent,
    DatabindingComponent,
    
    FilterPipe,
    AsyncComponent,
    ChildComponent,
    ParentComponent,
    FlitertablePipe,
    DirectiveComponent,
    ShowhideComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
