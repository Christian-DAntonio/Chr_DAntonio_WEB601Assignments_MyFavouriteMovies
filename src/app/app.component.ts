import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chr_DAntonio_MyFavouriteMovies';
  theme = 'Movies';

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
  processContent (content: Content):void {
    console.log(content.body);
  }
}
