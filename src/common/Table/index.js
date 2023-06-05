import {
  Main,
  Container,
  Background,
  ButtonPaper,
  ButtonScissors,
  ButtonRock,
} from "./styled";
import { ReactComponent as PaperLogo } from "./icon-paper.svg";
import { ReactComponent as ScissorsLogo } from "./icon-scissors.svg";
import { ReactComponent as RockLogo } from "./icon-rock.svg";
import bgtriangle from "./bg-triangle.svg";

export const Table = () => {
  return (
    <Main>
      <Container>
        <Background src={bgtriangle} alt="" />
        <ButtonPaper>
          <PaperLogo />
        </ButtonPaper>
        <ButtonScissors>
          <ScissorsLogo />
        </ButtonScissors>
        <ButtonRock>
          <RockLogo />
        </ButtonRock>
      </Container>
    </Main>
  );
};
