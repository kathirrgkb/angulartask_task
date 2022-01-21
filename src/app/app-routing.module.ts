import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ObjandarrayComponent} from './objandarray/objandarray.component';
import { PipeComponent } from './pipe/pipe.component';
import { ApiComponent } from './api/api.component';
import { ImgapicallComponent } from './imgapicall/imgapicall.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { JsonfetchComponent } from './jsonfetch/jsonfetch.component';
import { AsyncComponent } from './async/async.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DirectiveComponent } from './directive/directive.component';
import { ShowhideComponent } from './showhide/showhide.component';

const routes: Routes = [
  {path:'objandarray',component:ObjandarrayComponent},
  {path:'jsonfetch',component:JsonfetchComponent},
  {path:'pipe',component:PipeComponent},
  {path:'api',component:ApiComponent},
  {path:'imgapi',component:ImgapicallComponent},
  {path:'databinding',component:DatabindingComponent},
  {path:'async',component:AsyncComponent},
  {path:'child',component:ChildComponent},
  {path:'parent',component:ParentComponent},
  {path:'directive',component:DirectiveComponent},
  {path:'showhide',component:ShowhideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
