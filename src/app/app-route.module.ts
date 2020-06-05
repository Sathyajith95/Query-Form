import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { MyQueriesComponent } from './my-queries/my-queries.component';
import { WriteQueryComponent } from './write-query/write-query.component';
import { QueryDetailsComponent } from './my-queries/query-details/query-details.component';

const appRoute: Routes = [
    {path: '', redirectTo: '/my-queries', pathMatch: 'full' },
    {path: 'my-queries', component: MyQueriesComponent, children: [
        {path: ":id", component: QueryDetailsComponent}
    ]},
    {path: 'write-query', component: WriteQueryComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRouteModule {

}