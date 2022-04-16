import { useApi } from "../api/hook";
import SearchInput from "../search/input";
const Home = () => {
  const { busy } = useApi();
  return (
    <div className="flex flex-row flex-wrap items-center">
      <section>
        <header>
          <img
            data-testid="logo"
            src="star-wars-logo.png"
            className="w-[30rem]"
            alt="Star Wars Logo"
          />
        </header>
        {!busy ? (
          <main>
            <SearchInput />
          </main>
        ) : (
          <div className="w-full text-center">
            Scanning the universe, please wait...
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
