import { TEMPORARY_ANY } from '@models/_project';
import { FieldValues, UseControllerMethods } from 'react-hook-form';

export type PropsAdapter = <TFieldValues extends FieldValues = FieldValues>(
  field: UseControllerMethods<TFieldValues>['field']
) => Partial<UseControllerMethods<TFieldValues>['field']>;

export type FormArrayEntity<
  Entity extends Record<TEMPORARY_ANY, TEMPORARY_ANY>
> = Entity;
