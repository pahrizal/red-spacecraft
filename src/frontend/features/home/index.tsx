import SearchInput from "../search/input";
const Home = () => {
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
      </section>
    </div>
  );
};

export default Home;
