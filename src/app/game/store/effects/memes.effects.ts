import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import * as MemesActions from '../actions/memes.actions';
import { MemesService } from '../../services/memes/memes.service';

@Injectable()
export class MemesEffects {
  getMemes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MemesActions.getMemes),
      mergeMap(() =>
        of(
          MemesActions.getMemesSuccess({ memes: this.memesService.getMemes() })
        )
      )
    );
  });

  constructor(private actions$: Actions, private memesService: MemesService) {}
}
