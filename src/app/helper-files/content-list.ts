import { ContentCardComponent } from "../content-card/content-card.component";
import { Content } from "./content-interface";

export class ContentList {
    static contentCount = 0;
    private _items: Content[];
    constructor(item: Content) {
        this._items = []; 
        this._items[0] = item;
        this.increaseCount();
    }

    increaseCount() {
        return ++ContentList.contentCount;
    }

    get items(): Content[]{
        return this._items;
    }

    set add(value: Content[]){
        this.add = value;
    }
}