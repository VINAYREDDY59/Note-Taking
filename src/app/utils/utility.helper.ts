import { UserNotes } from '../create-note/create-note.component';

export const args: FilterSearchResultsOption = { keys: [ 'notes' ] };

export interface FilterSearchResultsOption {
  keys: Array<Extract<keyof UserNotes, string>>;
}
