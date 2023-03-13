export enum PAGES_IDS {
  PRODUCT = 'PRODUCT',
  PRICE_PLANS = 'PRICE_PLANS',
  PAGES = 'PAGES',
}

export const DEFAULT_PAGE_ID = PAGES_IDS.PRODUCT;

export interface PageConfig {
  id: PAGES_IDS;
  title: string;
  component: React.FC;
}

export interface NavigationLayoutProps {
  onChange?: (id: string) => void;
  config?: PageConfig[];
  currentUrl?: string;
}
