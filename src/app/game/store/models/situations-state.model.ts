import { ISituation } from '../../models/situation.model';

export interface ISituationsState {
  situations: ISituation[];
  selectedSituation: ISituation | null;
}
