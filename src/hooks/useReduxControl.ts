import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getControl, setControl } from '@store/controls';

export const useReduxControl = <T>(
  id: string,
  defaultValue?: T
): [T | undefined, (val: T) => void] => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { current: controlId } = useRef(id);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const control = useSelector(getControl<T>(controlId)) || defaultValue;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const updateControl = (value: T) => {
    dispatch(setControl({ code: controlId, value }));
  };

  return [control, updateControl];
};
