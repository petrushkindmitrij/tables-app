import { ENTITIES_NAMES, ENTITIES_TYPES } from '@models/Entities';

export type FieldsType<E extends ENTITIES_NAMES> = ENTITIES_TYPES[E];

export interface EditModalWindowProps<
  E extends ENTITIES_NAMES,
  K extends keyof ENTITIES_TYPES[E] = keyof ENTITIES_TYPES[E]
> {
  fields: Array<{ name: K; title: string }>;
  entity: E;
  id: ENTITIES_TYPES[E]['id'];
}

export interface ComponentProps<E extends ENTITIES_NAMES>
  extends Pick<EditModalWindowProps<E>, 'fields'> {}
