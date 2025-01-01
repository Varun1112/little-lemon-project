import { FC } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import CallToAction from "../../components/CallToAction";

const Home: FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <CallToAction />
    </Container>
  );
};

export default Home;