import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { fonts, colors } from '@/styles/constants';
import { createDarkenColor } from '@/lib/csx';

type Props = ComponentPropsWithRef<'button'>;

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button css={button} {...props}>
      {children}
    </button>
  );
};

const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-family: ${fonts.notoSans};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  color: ${colors.white};
  letter-spacing: -0.035em;
  cursor: pointer;
  background-color: ${colors.primary};
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    /* stylelint-disable-next-line function-name-case, function-no-unknown */
    background-color: ${createDarkenColor(colors.primary, 0.15)};
  }

  &:focus:not(.focus-visible) {
    outline-color: transparent;
  }
`;

export default Button;
