import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'movies'
})
export class MoviesPipe implements PipeTransform {

  transform(contentList: Content[]) {
    return contentList.filter(c => c.title != null ? 
      c.title.length : null);
  }

}
