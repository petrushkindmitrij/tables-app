import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  .BaseTable--dynamic .BaseTable__row {
    overflow: unset !important;
  }
  .BaseTable__header {
    overflow: unset !important;
    .BaseTable__header-cell {
      overflow: unset !important;
      .BaseTable__sort-indicator {
        position: absolute;
        top: 8px;
        right: 0;
      }
    }
  }
  .BaseTable {
    background-color: #ffffffff;
    border-radius: 0px 0px 8px 8px;
    box-shadow: none;
  }
  .BaseTable__table-main {
    background-color: #ffffffff;
    outline: none;
  }

  .BaseTable__empty-layer {
    background: transparent;
  }

  .BaseTable__header-cell {
    padding: 0 !important;
    overflow: unset !important;

    span {
      margin-bottom: 8px;
    }
  }

  .BaseTable__row-cell {
    padding: 0 !important;
    overflow: unset !important;
    .BaseTable__expand-icon:empty {
      display: none;
    }
  }

  .BaseTable__row {
    padding: 0 !important;
    background-color: #ffffffff;
    &:hover {
      background-color: #f7f7f8ff;
    }
    border-bottom: 1px solid #e5e5e5ff;
    &.BaseTable__row--depth-1 {
      .BaseTable__row-cell:first-child {
        padding-left: 37px !important;
      }
    }
    &.BaseTable__row--depth-2 {
      .BaseTable__row-cell:first-child {
        padding-left: 59px !important;
      }
    }
  }
  .BaseTable__body {
    color: #111111ff;
    overflow-x: hidden !important;
    cursor: default;
    background-color: #ffffffff;
    border-radius: 0px 0px 8px 8px;
    padding-right: 10px;
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: transparent;
    }
    ::-webkit-scrollbar {
      width: 8px;
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      width: 4px;
      border-radius: 6px;
      background-color: #424242ff;
    }
  }
  .BaseTable__header {
    height: auto !important;
    background-color: #ffffffff;
    > div {
      height: unset !important;
      display: flex;
      align-items: stretch;
    }
    overflow: unset !important;
    .BaseTable__header-row {
      background-color: #ffffffff;
      border-bottom: 1px solid #e5e5e5ff;
      height: unset !important;
    }
    .BaseTable__header-cell {
      overflow: unset !important;

      .BaseTable__expand-icon {
        display: none;
      }
      .BaseTable__sort-indicator {
        position: absolute;
        top: 8px;
        right: 0px;
      }

      > * {
        justify-content: space-between;
        height: 100%;
      }

      &[data-key='actions'] {
        > * {
          justify-content: flex-end;
        }
      }
    }
  }
`;
