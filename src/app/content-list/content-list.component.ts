import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  name: string;
  myContentArray: Content[];
  contentItem = {
    id: 1024,
    title: 'The Godfather Part 2',
    description: 'The compelling sequel to "The Godfather," contrasting the life of Corleone father and son. Traces the problems of Michael Corleone (Al Pacino) in 1958 and that of a young immigrant Vito Corleone (Robert De Niro) in 1917s Hells Kitchen. Michael survives many misfortunes and Vito is introduced to a life of crime.',
    creator: 'Francis Ford Coppola',
    genre: 'Crime',
    body: 'Should be obivous enough as to why this one is here',
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    releaseDate: 1974
  }

  contentItem2 = {
    id: 1025,
    title: 'The Hunt',
    description: 'A kindergarten teachers (Mads Mikkelsen) world collapses around him after one of his students (Annika Wedderkopp), who has a crush on him, implies that he committed a lewd act in front of her.',
    creator: 'Thomas Vinterberg',
    genre: 'Drama',
    body: 'This one is probably my favourite movie out of the three',
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_.jpg',
    releaseDate: 2012
  }

  contentItem3 = {
    id: 1026,
    title: 'Sunset Boulevard',
    description: 'An aging silent film queen refuses to accept that her stardom has ended. She hires a young screenwriter to help set up her movie comeback. The screenwriter believes he can manipulate her, but he soon finds out he is wrong. The screenwriters ambivalence about their relationship and her unwillingness',
    creator: 'Bily Wilder',
    genre: 'Drama',
    body: 'Good movie',
    imgUrl: 'https://resizing.flixster.com/jASvWdyGN-hdWP61BVQk5njKUno=/206x305/v2/https://flxt.tmsimg.com/assets/p1187_p_v8_ai.jpg',
    releaseDate: 1950
  };

  contentItem4 = {
    id: 1027,
    title: 'American Psycho',
    description: 'In New York City in 1987, a handsome, young urban professional, Patrick Bateman (Christian Bale), lives a second life as a gruesome serial killer by night. The cast is filled by the detective (Willem Dafoe), the fiance (Reese Witherspoon), the mistress (Samantha Mathis), the coworker (Jared Leto), and the secretary (Chloë Sevigny). This is a biting, wry comedy examining the elements that make a man a monster.',
    creator: 'Mary Harron',
    genre: 'Horror Comedy',
    body: 'A modern day classic',
    releaseDate: 2000
  };

  contentItem5 = {
    id: 1028,
    title: 'Blow Out',
    description: 'While recording sound effects for a slasher flick, Jack Terri (John Travolta) stumbles upon a real-life horror: a car careening off a bridge and into a river. Jack jumps into the water and fishes out Sally (Nancy Allen) from the car, but the other passenger is already dead -- a governor intending to run for president. As Jack does some investigating of his tapes, and starts a perilous romance with Sally, he enters a tangled web of conspiracy that might leave him dead.',
    creator: 'Brian De Palma',
    genre: 'Thriller/Mystery',
    body: 'Good movie',
    releaseDate: 1981
  };

  contentItem6 = {
    id: 1029,
    title: 'No Country For Old Men',
    description: 'While out hunting, Llewelyn Moss (Josh Brolin) finds the grisly aftermath of a drug deal. Though he knows better, he cannot resist the cash left behind and takes it with him. The hunter becomes the hunted when a merciless killer named Chigurh (Javier Bardem) picks up his trail. Also looking for Moss is Sheriff Bell (Tommy Lee Jones), an aging lawman who reflects on a changing world and a dark secret of his own, as he tries to find and protect Moss.',
    creator: 'Joel Coen, Ethan Coen',
    genre: 'Western',
    body: 'Consistently compelling and entertaining throughout',
    releaseDate: 2007
  };

  contentItem7 = {
    id: 1030,
    title: 'Full Metal Jacket',
    description: 'Stanley Kubricks take on the Vietnam War follows smart-aleck Private Davis (Matthew Modine), quickly christened "Joker" by his foul-mouthed drill sergeant (R. Lee Ermey), and pudgy Private Lawrence (Vincent DOnofrio), nicknamed Gomer Pyle, as they endure the rigors of basic training. Though Pyle takes a frightening detour, Joker graduates to the Marine Corps and is sent to Vietnam as a journalist, covering -- and eventually participating in -- the bloody Battle of Hué.',
    creator: 'Stanley Kubrick',
    genre: 'War/Drama',
    body: 'Great movie',
    releaseDate: 1987
  };
  bandList: any;

  addBandToList(newBandFromChild: Content) {
    this.bandList.push(newBandFromChild);

    this.bandList = Object.assign([], this.bandList);

    this.bandList = [...this.bandList];
  }

  ngOnInit(){
    this.myContentArray = [this.contentItem, this.contentItem2, this.contentItem3, this.contentItem4, this.contentItem5, this.contentItem6, this.contentItem7]
  }

  searchFunction(){
    this.myContentArray.find(value => value.title = this.name)
  }
}
