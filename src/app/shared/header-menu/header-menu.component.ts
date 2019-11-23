import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnDestroy {

  @ViewChild('drawer', {static: true}) private drawer: MatSidenav;

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _mediaMatcher: MediaMatcher,
  ) {
    this.mobileQuery = this._mediaMatcher.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => this._changeDetectorRef.detectChanges();
    // this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy() {
    // this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  /**
   * toggleSideNav - Abre/Cierra el menú
   *
   * @memberof HeaderMenuComponent
   */
  toggleSideNav() {
    this.drawer.toggle();
  }

}
