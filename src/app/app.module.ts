import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddContactListComponent } from './add-contact-list/add-contact-list.component';
import { EditContactListComponent } from './edit-contact-list/edit-contact-list.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/providers/filter.pipe';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path : '',redirectTo:'app/list',pathMatch:'full' },
  { path : 'app/list',component: ContactListComponent},
  { path : 'app/add',component: AddContactListComponent},
  { path : 'app/edit/:id',component: EditContactListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactListComponent,
    FilterPipe,
    EditContactListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
