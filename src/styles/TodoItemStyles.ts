import styled from '@emotion/styled';

export const TodoItemStyled = styled.div<{ completed: boolean, isEditing: boolean }>`
  position: relative;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? 'gray' : '#000')};
  padding: 15px 15px 15px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;

  border: 1px solid ${(props) => (props.isEditing ? '#b83f45' : 'none')};
  box-shadow: ${(props) => (props.isEditing ? '0 0 2px 2px #cf7d7d' : 'none')};

  &:not(:nth-of-type(1)) {
    border-top: 1px solid ${(props) => (props.isEditing ? '#b83f45' : '#e6e6e6')};
  }

  .removeButton {
    display: none;

    &:hover {
      cursor: pointer;
      color: #b83f45;
    }
  }

  &:hover .itemText {
    .removeButton {
      display: block;
    }
  }

  .itemsWrapper {
    display: flex;
    width: 100%;
  }

  .itemsEditWrapper {
    width: 100%;
    input {
      font-size: 20px;
      padding: 7px 0;
      border: none;
      width: 100%;

      &:focus {
        outline: none;
      }
    }
  }

  .radioCheckDone {
    position: absolute;
    left: 10px;

    input {
      visibility: ${(props) => (props.completed ? 'visible' : 'hidden')};

      &:checked + .labelWrapper .labelForCheckbox {
        background-color: #fff;
        border-color: ${(props) => (props.completed ? '#66bb6a' : '#ccc')};

        &:after {
          opacity: ${(props) => (props.completed ? '1' : '0')};
        }
      }
    }

    .labelWrapper {
      position: relative;
      
      .labelForCheckbox {
        background-color: #fff;
        border: 1px solid ${(props) => (props.completed ? '#66bb6a' : '#ccc')};
        border-radius: 50%;
        cursor: pointer;
        height: 28px;
        left: 0;
        position: absolute;
        top: 0;
        width: 28px;
  
        &:after {
          border: 2px solid #fff;
          border-top: none;
          border-right: none;
          content: "";
          height: 6px;
          left: 7px;
          opacity: ${(props) => (props.completed ? '1' : '0')};
          border-color: ${(props) => (props.completed ? '#66bb6a' : 'unset')};
          position: absolute;
          top: 8px;
          transform: rotate(-45deg);
          width: 12px;
        }
      }
    }
  }

  .itemText {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .showText {
      width: 100%;
    }
  }

  .itemEditText {
    display: flex;
    width: 100%;
    input {
      font-size: 20px;
      padding: 10px 0;
      border: none;
      width: 100%;
    }
  }
`;