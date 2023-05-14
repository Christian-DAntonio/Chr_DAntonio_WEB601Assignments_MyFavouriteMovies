import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentItem:Content = {
    id: 1024,
    title: 'The Godfather Part 2',
    description: 'The compelling sequel to "The Godfather," contrasting the life of Corleone father and son. Traces the problems of Michael Corleone (Al Pacino) in 1958 and that of a young immigrant Vito Corleone (Robert De Niro) in 1917s Hells Kitchen. Michael survives many misfortunes and Vito is introduced to a life of crime.',
    creator: 'Francis Ford Coppola',
    genre: 'Crime',
    body: '',
    releaseDate: 1974
  }

  contentItem2:Content = {
    id: 1024,
    title: 'hello',
    description: '',
    creator: '',
    genre: '',
    body: '',
    releaseDate: 1974
  }

  contentItem3:Content = {
    id: 1024,
    title: 'hello',
    description: '',
    creator: '',
    genre: '',
    body: '',
    releaseDate: 1974
  }
  myContentList: ContentList;

  myContentItems: Content[];

  constructor() {
    this.myContentList = new ContentList(this.contentItem);
    this.myContentList.add
    // after creating a setter function for items in ContentList, call that function to add my other 2 contentItems
    // this.myContentList. 
  }

  getItems() {}
  processContent ():void {
    this.myContentItems = this.myContentList.items;
    console.log(this.myContentItems);
  }
}
