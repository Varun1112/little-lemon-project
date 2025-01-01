import { FC } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";

const Home: FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;