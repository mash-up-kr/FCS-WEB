import styled from 'styled-components';
import React, { useRef } from 'react';

import ProfileIcon from '../../assets/ic-profile-edit.png';

interface Props {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  url?: string | null;
}

const ImageField: React.FC<Props> = ({ onChange, url, ...otherProps }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Wrapper {...otherProps}>
      <DefaultProfile src={ProfileIcon} alt="default image" />
    </Wrapper>
    // <div css={s.wrapper} {...otherProps}>
    //   <label htmlFor="profile" css={a11y}>
    //     프로필 이미지
    //   </label>
    //   <button type="button" css={s.button} onClick={handleClick}>
    //     이미지 등록
    //     {url && <img css={s.image} src={url} alt="프로필 이미지" />}
    //   </button>
    //   <input
    //     id="profile"
    //     css={s.input}
    //     ref={inputRef}
    //     type="file"
    //     accept="image/x-png,image/jpeg"
    //     onChange={onChange}
    //   />
    // </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DefaultProfile = styled.img``;
// const s = {
//   wrapper: css`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   `,
//   button: (theme: Theme): SerializedStyles => css`
//     position: relative;
//     display: block;
//     width: 76px;
//     height: 0;
//     padding-top: 74px;
//     border: 1px solid ${theme.palette.main[400]};
//     border-radius: 50%;
//     text-indent: -9999px;
//     ::before {
//       content: '';
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       width: 72px;
//       height: 72px;
//       border-radius: 50%;
//       background-color: ${theme.palette.gray[200]};
//     }
//     ::after {
//       content: '';
//       position: absolute;
//       right: 0;
//       bottom: 0;
//       width: 24px;
//       height: 24px;
//       background: url(${cameraIcon}) no-repeat;
//     }
//   `,
//   image: css`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 72px;
//     height: 72px;
//     border-radius: 50%;
//   `,
//   input: css`
//     display: none;
//   `,
// };

export default ImageField;
