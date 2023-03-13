import { ENTITIES_NAMES, ENTITIES_TYPES } from '@models/Entities';

type CreatePartState<E extends ENTITIES_NAMES> = Record<
  E,
  Partial<Array<ENTITIES_TYPES[E]>>
>;

export interface Entities
  extends CreatePartState<ENTITIES_NAMES.PRODUCT>,
    CreatePartState<ENTITIES_NAMES.PRICE_PLANS>,
    CreatePartState<ENTITIES_NAMES.PAGES> {}

export interface State {
  entities: Entities;
  selectedId: ENTITIES_TYPES[ENTITIES_NAMES]['id'] | null;
}
