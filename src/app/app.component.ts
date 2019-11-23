import { Component, OnDestroy } from '@angular/core';
import { Router, Event, ActivationEnd } from '@angular/router';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  private unsubscribe = new Subject<void>();
  title = 'yuju-examen';

  constructor(
    private _router: Router,
    private _title: Title,
    private _meta: Meta,
  ) {
    this.getDataRoute().pipe(takeUntil(this.unsubscribe)).subscribe( data => {
      this.title = data.titulo;
      _title.setTitle(this.title);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.title
      };

      _meta.updateTag( metaTag );
    } );
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getDataRoute() {
    return this._router.events.pipe(
      filter( (eventoa: Event) => eventoa instanceof ActivationEnd ),
      filter( (eventob: ActivationEnd) => eventob.snapshot.firstChild === null ),
      map( (eventoc: ActivationEnd) => eventoc.snapshot.data )
    );
  }

}
