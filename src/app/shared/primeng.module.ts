import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
    ButtonModule,
    TabViewModule,
    RippleModule,
    ChipModule,
    SkeletonModule,
    ScrollTopModule,
    DividerModule,
    TooltipModule,
  ],
  exports: [
    ButtonModule,
    TabViewModule,
    RippleModule,
    ChipModule,
    SkeletonModule,
    ScrollTopModule,
    DividerModule,
    TooltipModule,
  ],
})
export class PrimeNgModule {}
