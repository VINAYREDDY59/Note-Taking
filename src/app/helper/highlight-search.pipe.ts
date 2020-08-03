import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { escapeHtml } from './escape-html.helper';


@Pipe({
  name: 'highlight',
})
export class HighlightMessagePipe implements PipeTransform {

  transform(itemMessage: string, searchTerm: string): SafeHtml {
    const escapedSearchTerm = escapeHtml(searchTerm);
    const searchTermLength = escapedSearchTerm.length;
    if (searchTermLength) {
      const highlightedMessage = escapeHtml(itemMessage);
      const search = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(search, 'gi');

      return highlightedMessage.replace(re, `<mark class="highlight-search-term">$&</mark>`);
    } else {
      return escapeHtml(itemMessage);
    }
  }
}
