import { VFC, ComponentPropsWithRef } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { fonts, colors } from '@/styles/constants';

type Props = {
  rootDivProps?: ComponentPropsWithRef<'div'>;
  inputProps?: ComponentPropsWithRef<'input'>;
};

const Dropzode: VFC<Props> = ({ rootDivProps, inputProps }) => {
  return (
    <div css={dropzone} {...rootDivProps}>
      <input {...inputProps} />
      <div css={dropzoneBgImageBlock}>
        <Image
          src="/uploader-bg.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p css={dropzoneDescription}>Drag &amp; Drop your image here</p>
    </div>
  );
};

const dropzone = css`
  display: grid;
  row-gap: 36px;
  place-items: center;
  justify-content: center;
  width: fit-content;
  padding: 36px 40px 40px;
  background-color: ${colors.gray6};
  border: 1px dashed ${colors.blueLighten};
`;

const dropzoneBgImageBlock = css`
  position: relative;
  width: 120px;
  height: 88px;
`;

const dropzoneDescription = css`
  font-family: ${fonts.poppins};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: ${colors.gray4};
  letter-spacing: -0.035em;
`;

export default Dropzode;
