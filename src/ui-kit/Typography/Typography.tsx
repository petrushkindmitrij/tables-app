import styled from '@emotion/styled';
import {
  color,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  variant,
} from '@xstyled/system';

import { css } from '@emotion/react';

import { TYPOGRAPHY_VARIANT, TypographyProps } from './types';

const fontFamily = css`
  font-family: 'Source Sans Pro', sans-serif;
`;

const getCSS = (
  font_size: number,
  line_height: number,
  font_weight: number,
  text_decoration?: string
) => css`
  font-size: ${font_size}px;
  line-height: ${line_height}px;
  font-weight: ${font_weight};
  ${text_decoration && `text-decoration: ${text_decoration}`};
`;

export const Typography = styled.span<TypographyProps>`
  ${fontFamily};
  color: #111111ff;
  ${variant({
    prop: 'variant',
    default: TYPOGRAPHY_VARIANT.BODY_1,
    variants: {
      [TYPOGRAPHY_VARIANT.HEADER_H1]: getCSS(38, 48, 600),
      [TYPOGRAPHY_VARIANT.HEADER_H2]: getCSS(30, 40, 700),
      [TYPOGRAPHY_VARIANT.HEADER_H3]: getCSS(24, 32, 700),
      [TYPOGRAPHY_VARIANT.HEADER_H4]: getCSS(20, 32, 700),
      [TYPOGRAPHY_VARIANT.LEAD_1]: getCSS(24, 32, 400),
      [TYPOGRAPHY_VARIANT.LEAD_2]: getCSS(20, 32, 400),
      [TYPOGRAPHY_VARIANT.LEAD_2_MEDIUM]: getCSS(20, 32, 600),
      [TYPOGRAPHY_VARIANT.BODY_1]: getCSS(16, 24, 400),
      [TYPOGRAPHY_VARIANT.BODY_1_MEDIUM]: getCSS(16, 24, 600),
      [TYPOGRAPHY_VARIANT.BODY_1_STRONG]: getCSS(16, 24, 700),
      [TYPOGRAPHY_VARIANT.BODY_1_UNDERLINE]: getCSS(16, 24, 400, 'underline'),
      [TYPOGRAPHY_VARIANT.BODY_2]: getCSS(14, 20, 400),
      [TYPOGRAPHY_VARIANT.BODY_2_MEDIUM]: getCSS(14, 20, 600),
      [TYPOGRAPHY_VARIANT.BODY_2_STRONG]: getCSS(14, 20, 700),
      [TYPOGRAPHY_VARIANT.BODY_3]: getCSS(12, 16, 400),
      [TYPOGRAPHY_VARIANT.BODY_3_MEDIUM]: getCSS(12, 16, 600),
      [TYPOGRAPHY_VARIANT.BUTTON]: getCSS(16, 24, 600),
      [TYPOGRAPHY_VARIANT.BUTTON_MEDIUM]: getCSS(16, 24, 700),
      [TYPOGRAPHY_VARIANT.BUTTON_LARGE]: getCSS(18, 24, 600),
      [TYPOGRAPHY_VARIANT.CAPS_SMALL]: getCSS(10, 16, 600),
      [TYPOGRAPHY_VARIANT.CAPS_MIDDLE]: getCSS(14, 24, 600),
    },
  })}
  ${color}
  ${margin}
  ${marginTop}
  ${marginBottom}
  ${marginLeft}
  ${marginRight}
`;
