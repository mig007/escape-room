import { Letter } from './letter';

export interface ScriptureSearch {
  reference: string;
  word: string;
  isFound?: boolean;
  answer?: Letter[];
}
