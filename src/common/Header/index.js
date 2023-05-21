import { Container, Title, Tools, Score, Designation, Points } from "./styled";

export const Header = () => {
  return (
    <Container>
      <Title>
        <Tools>ROCK</Tools>
        <Tools>PAPER</Tools>
        <Tools>SCISSORS</Tools>
      </Title>
      <Score>
        <Designation>SCORE</Designation>
        <Points>12</Points>
      </Score>
    </Container>
  );
};
