export enum ENTITIES_NAMES {
  PRODUCT = 'Product',
  PRICE_PLANS = 'PricePlans',
  PAGES = 'Pages',
}

export type ENTITIES_TYPES = {
  [ENTITIES_NAMES.PRODUCT]: {
    id: number;
    name: string;
    active: boolean;
    createAt: string;
  };
  [ENTITIES_NAMES.PRICE_PLANS]: {
    id: number;
    description: string;
    active: boolean;
    createAt: string;
    removeAt: string;
  };
  [ENTITIES_NAMES.PAGES]: {
    id: number;
    title: string;
    active: boolean;
    updatedAt: string;
    publishedAt: string;
  };
};
