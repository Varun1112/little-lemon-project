import { FC } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import CallToAction from "../../components/CallToAction";
import Specials from "../../components/Specials";

const Home: FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <CallToAction />
      <Specials />
    </Container>
  );
};

export default Home;