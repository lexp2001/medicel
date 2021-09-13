import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsPage } from './events.page';

const routes: Routes = [
  {
    path: '',
    component: EventsPage,
  },  {
    path: 'events-details',
    loadChildren: () => import('./events-details/events-details.module').then( m => m.EventsDetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsPageRoutingModule {}
