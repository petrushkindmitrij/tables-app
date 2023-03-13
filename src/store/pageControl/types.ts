import { PAGES_IDS } from '@models/Navigation';

export interface State {
  currentPageId: PAGES_IDS;
  isModalWindowOpened: boolean;
}
