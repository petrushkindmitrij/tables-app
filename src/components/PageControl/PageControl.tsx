import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentPage, setCurrentPage } from '@store/pageControl';

import { ARRAY_OF_PAGE_CONFIGS } from '@pages';
import { Navigation } from '@components/Navigation';
import { LeftSideLayout } from '@layouts/LeftSideLayout';

export const PageControl: React.FC = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(getCurrentPage);

  const currentPage =
    ARRAY_OF_PAGE_CONFIGS.find(({ id }) => id === currentStep) ||
    ARRAY_OF_PAGE_CONFIGS[0];

  const { component: Component } = currentPage;

  return (
    <LeftSideLayout
      leftSide={
        <Navigation
          config={ARRAY_OF_PAGE_CONFIGS}
          onSelect={pageId => dispatch(setCurrentPage(pageId))}
          selected={currentStep}
        />
      }
    >
      <Component />
    </LeftSideLayout>
  );
};
