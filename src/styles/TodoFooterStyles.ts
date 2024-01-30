import styled from '@emotion/styled';

export const TodoFooterStyled = styled.div`
  display: flex;
  background: #fff;
  justify-content: space-between;
  border-top: 1px solid #e6e6e6;
  font-size: 15px;
  height: 20px;
  padding: 10px 15px;

  span {
    &.asLink {
      position: relative;
      z-index: 1;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  &:before {
    bottom: 0;
    box-shadow: 0 1px 1px rgba(0,0,0,.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0,0,0,.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0,0,0,.2);
    content: "";
    height: 50px;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
  }
`;

export const FilterBox = styled.div`
  position: relative;
  z-index: 1;
  ul {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 5px;
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      padding: 0 5px;
      a {
        font-weight: normal;
        color: #000;
      }

      &.active {
        border: 1px solid #ce4646;
        border-radius: 3px;
      }
    }
  }
`;