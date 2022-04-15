import React, { useEffect } from "react";
import SearchInput from "../search/input";
import { People } from "../../../backend/swapi/schema";
const Home = () => {
  const [tes, setTes] = React.useState<People | null>(null);
  useEffect(() => {
    // test fetch person
    fetch("/api/person/1")
      .then((res) => res.json())
      .then((res) => setTes(res));
  }, []);
  return (
    <div className="flex flex-row flex-wrap items-center">
      <section>
        <header>
          <img
            src="star-wars-logo.png"
            className="w-[30rem]"
            alt="Star Wars Logo"
          />
        </header>
        <main>
          <SearchInput />
        </main>
        <p>{tes?.name}</p>
      </section>
    </div>
  );
};

export default Home;
