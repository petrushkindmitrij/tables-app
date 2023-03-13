import { useEffect } from 'react';
import { useReduxControl } from '@hooks/useReduxControl';

export const useOpenedNavigationFields = (resetOnUnmount = false) => {
  const [openedNavigationFields, setOpenedNavigationFields] = useReduxControl<
    string[]
  >('useOpenedNavigationFields');

  useEffect(
    () => () => {
      if (resetOnUnmount) {
        setOpenedNavigationFields([]);
      }
    },
    []
  );
  return [openedNavigationFields || [], setOpenedNavigationFields] as const;
};
