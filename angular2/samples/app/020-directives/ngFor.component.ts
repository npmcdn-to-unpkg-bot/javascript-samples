import { Component } from '@angular/core';

@Component({
    selector: 'ng-for-sample',
    templateUrl: 'app/020-directives/ngFor.html'
})
export class NgForComponent {
    public list: string[] = [];
    public textToAdd: string;

    constructor() {
        this.list.push("Hello");
        this.list.push("World");        
    }

    public remove(index: number) {
        this.list.splice(index, 1);
    }

    public add() {
        this.list.push(this.textToAdd);
        this.textToAdd = "";
    }

    public print(text: string) {
        console.log(text);
    }
}
