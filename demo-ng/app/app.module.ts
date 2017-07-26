import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { DropDownModule } from "nativescript-drop-down/angular";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { DropDownComponent } from "./dropdown/dropdown.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        DropDownModule,
        NativeScriptUIListViewModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DropDownComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
