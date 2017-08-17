import { NgModule }              from '@angular/core';
import { RouterModule, PreloadAllModules, Routes }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'more-details-item/:uid',
    component: ItemDetailsComponent
  },
//   {
//     path: 'vr-experience',
//     children: [
//       {
//         path: '',
//         component: VRExperienceComponent
//       },
//       {
//         path: 'video',
//         component: VideoComponent
//       },
//       {
//         path: 'appointment',
//         component: AppointmentComponent
//       },
//       {
//         path: 'confirmation',
//         component: ConfirmationComponent
//       },
//       {
//         path: 'enquire',
//         component: EnquireComponent
//       },
//       {
//         path: 'thank-you',
//         component: ThankYouComponent
//       },
//     ]
//   },
//   {
//     path: 'about',
//     component: AboutComponent,
//   },
//   {
//     path: 'contact',
//     component: ContactComponent,
//   }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes,{useHash:true, preloadingStrategy:PreloadAllModules})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
