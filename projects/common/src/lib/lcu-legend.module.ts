import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegendComponent } from './controls/legend/legend.component';
import { DeleteItemComponent } from './controls/legend/delete-item/delete-item.component';



@NgModule({
  declarations: [LegendComponent, DeleteItemComponent],
  imports: [
    CommonModule,
  ],
  exports: [LegendComponent, DeleteItemComponent],
  entryComponents: [LegendComponent, DeleteItemComponent]
})
export class LcuLegendModule { }
