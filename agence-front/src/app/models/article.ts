import {Auteur} from './auteur';
import {Tag} from './tag';

export interface Article {
  _id?: string;
  dateCreation: string;
  titre: string;
  auteur: Auteur;
  presentation: string;
  texte: string;
  image: string;
}
