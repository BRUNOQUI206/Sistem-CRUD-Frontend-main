import { Routes } from '@angular/router';
import { PostCustomerComponent } from './components/post-customer/post-customer.component';
import { GetAllCostumersComponent } from './components/get-all-costumers/get-all-costumers.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';

export const routes: Routes = [
    { path: 'customer', component: PostCustomerComponent },
    { path: '', component: GetAllCostumersComponent },
    { path: 'customer/:id', component: UpdateCustomerComponent }

];
