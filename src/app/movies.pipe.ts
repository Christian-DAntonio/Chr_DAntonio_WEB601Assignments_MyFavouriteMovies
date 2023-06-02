import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'movies'
})
export class MoviesPipe implements PipeTransform {

  transform(contentList: Content[], typeToFilter: string) {
    return contentList.filter(c => c.genre === typeToFilter)
  }

}
