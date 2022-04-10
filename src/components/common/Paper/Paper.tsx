import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { colors } from '@/styles/constants';

type Props = ComponentPropsWithRef<'div'>;

const Paper: FC<Props> = ({ children, ...props }) => {
  return (
    <div css={paper} {...props}>
      {children}
    </div>
  );
};

const paper = css`
  width: fit-content;
  padding: 36px 32px;
  background-color: ${colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
`;

export default Paper;
