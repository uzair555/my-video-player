import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, NgModule,Injector  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { VjsPlayerComponent } from './vjs-player/vjs-player.component';

@NgModule({
  declarations: [
    AppComponent,
    VjsPlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [VjsPlayerComponent]
})
// export class AppModule { 

//  constructor(private injector: Injector) {
//     const el = createCustomElement(VjsPlayerComponent, { injector });
//     customElements.define('app-vjs-player', el);
//   }

//   ngDoBootstrap() {}

//  }
export class AppModule implements DoBootstrap {
  constructor(private injector:Injector){
  }

  
  ngDoBootstrap(){ 
    const webComponent=createCustomElement(VjsPlayerComponent,{injector:this.injector});
    
    customElements.define('custom-player',webComponent)
   }
 }
