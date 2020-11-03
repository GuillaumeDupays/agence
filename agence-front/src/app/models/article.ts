import {Auteur} from './auteur';
import {Tag} from './tag';

export interface Article {
  _id?: string;
  titre: string;
  // auteur: Auteur;
  dateCreation: string;
  descriptif: string;
}
