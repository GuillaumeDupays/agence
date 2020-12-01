import {Auteur} from './auteur';
import {Tag} from './tag';
import {Paragraphes} from './paragraphes';

export interface Article {
  _id?: string;
  dateCreation: string;
  titre: string;
  presentation: string;
  image: string;
  auteur: Auteur;
  paragraphes?: Paragraphes;
}
