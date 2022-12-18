import styled from 'styled-components';

export const ListElem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  :nth-child(2n) {
    background-color: #eee;
  }
`;

export const Delete = styled.button`
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  border: 0.5px solid grey;
  padding: 5px;
  margin-left: 12px;

  :hover {
    background-color: blue;
    color: #fff;
  }
`;
