import styled from '@emotion/styled';

export const TodoBoxContainerStyled = styled.div`
  background: #fff;
  position: relative;
  display: flex;
  width: 100%;
  input {
    font-size: 24px;
    line-height: 1.4em;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    width: 100%;

    ::-ms-input-placeholder {
      font-style: italic;
    }

    ::placeholder {
      font-style: italic;
    }

    &:focus {
      outline: 1px solid #b83f45;
      box-shadow: 0 0 2px 2px #cf7d7d;
    }
  }

  .iconCheckAll {
    position: absolute;
    left: 0;
    width: 60px;
    top: 30%;
  }
`;