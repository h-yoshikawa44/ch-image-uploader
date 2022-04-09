import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'progress'> & {
  fullWidth?: boolean;
};

const Progress: VFC<Props> = ({ value, fullWidth = false, ...props }) => {
  return (
    <progress
      css={[progress, fullWidth && progressFullWidth]}
      value={value}
      {...props}
    >
      {`${value}%`}
    </progress>
  );
};

const borderRadius = '8px';

const progress = css`
  height: 8px;

  &::-webkit-progress-bar {
    border-radius: ${borderRadius};
  }

  &::-webkit-progress-value {
    border-radius: ${borderRadius};
  }

  &::-moz-progress-bar {
    border-radius: ${borderRadius};
  }

  &::-ms-fill {
    border-radius: ${borderRadius};
  }
`;

const progressFullWidth = css`
  width: 100%;
`;

export default Progress;
