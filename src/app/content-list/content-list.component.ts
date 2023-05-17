import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  myContentArray: Content[];
  contentItem = {
    id: 1024,
    title: 'The Godfather Part 2',
    description: 'The compelling sequel to "The Godfather," contrasting the life of Corleone father and son. Traces the problems of Michael Corleone (Al Pacino) in 1958 and that of a young immigrant Vito Corleone (Robert De Niro) in 1917s Hells Kitchen. Michael survives many misfortunes and Vito is introduced to a life of crime.',
    creator: 'Francis Ford Coppola',
    genre: 'Crime',
    body: 'Should be obivous enough as to why this one is here',
    releaseDate: 1974
  }

  contentItem2 = {
    id: 1025,
    title: 'The Hunt',
    description: 'A kindergarten teachers (Mads Mikkelsen) world collapses around him after one of his students (Annika Wedderkopp), who has a crush on him, implies that he committed a lewd act in front of her.',
    creator: 'Thomas Vinterberg',
    genre: 'Drama',
    body: 'This one is probably my favourite movie out of the three',
    releaseDate: 2012
  }

  contentItem3 = {
    id: 1026,
    title: 'Sunset Boulevard',
    description: 'An aging silent film queen refuses to accept that her stardom has ended. She hires a young screenwriter to help set up her movie comeback. The screenwriter believes he can manipulate her, but he soon finds out he is wrong. The screenwriters ambivalence about their relationship and her unwillingness',
    creator: 'Bily Wilder',
    genre: 'Drama',
    body: 'Good movie',
    releaseDate: 1950
  };

  ngOnInit(){
    this.myContentArray = [this.contentItem, this.contentItem2, this.contentItem3]
  }
}
