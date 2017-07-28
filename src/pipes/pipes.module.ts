import { NgModule } from '@angular/core';

import { PlaceNamePipe } from './place-name.pipe';
import { TokPipe } from './tok.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    PlaceNamePipe,
    TokPipe
  ],
  exports:[
    PlaceNamePipe,
    TokPipe
  ]
})
export class PipesModule { }
