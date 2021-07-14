import styled from "styled-components";

export const Card = styled.div`
  border-radius: 3px;
  border: 6px #3b4cca solid;
  padding: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-width: 280px;
  min-height: 300px;
  margin-right: 12px;
  margin-bottom: 24px;
  background-color: #ffde00;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const xbutton = styled.div`
  float: left;
  cursor: pointer;
  position: relative;
  right: -60px;
  font-size: 50px;
  z-index: 100;
  &:hover {
    cursor: pointer;
  }
`;

export const pokename = styled.div``;
