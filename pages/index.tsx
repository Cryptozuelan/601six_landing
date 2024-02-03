import React from "react";

import { Cards, Container, Footer, Header, Main } from "@components";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="bg-black">
        <Header />
        <Main />
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
