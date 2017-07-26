import { Component, OnInit } from "@angular/core";
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";

@Component({
    selector: "dropdown-demo",
    moduleId: module.id,
    templateUrl: "./dropdown.component.html",
})
export class DropDownComponent implements OnInit {
    public selectedIndex: number = null;
    public hint                  = "My Hint";
    public selectableItems: ValueList<string>;
    public cssClass: string      = "default";
    public cartItems = [
        {
            label: 'shoppingCartItem1',
            value: null
        }, {
            label: 'shoppingCartItem2',
            value: null
        }
    ];

    public ngOnInit() {
        this.selectableItems = new ValueList<string>();
        for ( let loop = 0; loop < 200; loop++ ) {
            this.selectableItems.push({
                value:   `I${loop}`,
                display: `Item ${loop}`,
            });
        }
    }

    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}. New value is "${this.selectableItems.getValue(
            args.newIndex)}"`);
    }

    public onopen() {
        console.log("Drop Down opened.");
    }

    public onclose() {
        console.log("Drop Down closed.");
    }

    public changeStyles() {
        this.cssClass = "changed-styles";
    }
}
