import '@emotion/react';
import { LibTheme } from 'some-lib';

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}
