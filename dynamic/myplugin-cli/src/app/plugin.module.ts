import { PluginComponent } from './plugin.component';
import { NgModule, InjectionToken } from '@angular/core';

@NgModule({
  declarations: [
    PluginComponent
  ],
  entryComponents: [
    //makes sure a factory is created in the bundle for this component
    PluginComponent
  ],
  providers: [
    //provide a token for the base to know what component to render
    { provide: 'PLUGIN_ENTRY_POINT', useValue: PluginComponent }
  ]
})
export class PluginModule {

}
