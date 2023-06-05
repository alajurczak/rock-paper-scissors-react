import styled from "styled-components";

export const Main = styled.main`
  max-width: 800px;
  margin: 150px auto;
`;

export const Container = styled.div`
  position: relative;
  max-height: 313px;
  display: flex;
`;

export const Background = styled.img`
  aspect-ratio: 313/ 278;
  width: 50%;
  margin: 0 auto;
`;

export const ButtonPaper = styled.button`
  cursor: pointer;
  position: absolute;
  left: 25%;
  top: 0;
  transform: translate(-25%, -50%);
  width: 25%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: solid 20px;
  border-color: ${({ theme }) => theme.color.paper};
`;

export const ButtonScissors = styled.button`
  cursor: pointer;
  position: absolute;
  right: 25%;
  top: 0;
  transform: translate(25%, -50%);
  width: 25%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: solid 20px;
  border-color: ${({ theme }) => theme.color.scissors};
`;

export const ButtonRock = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 25%);
  width: 25%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: solid 20px;
  border-color: ${({ theme }) => theme.color.rock};
`;
