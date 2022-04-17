import clsx from "clsx";
import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackIcon from "../../assets/icons/back";
import Spinner from "../../assets/spinner";
import { useApi } from "../api/hook";
import { ROUTES } from "../router/definition";
import StatRow from "./stat-row";

const Person: FC = () => {
  const params = useParams<{ id: string }>();
  const { busy, currentPeople, fetchPeopleById } = useApi();
  const nav = useNavigate();

  useEffect(() => {
    fetchPeopleById(Number(params.id));
  }, [fetchPeopleById, params.id]);

  // listen escape key to go back home
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        nav(ROUTES.home.path);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nav]);

  return (
    <section
      className={clsx(
        "flex flex-col items-center justify-center",
        "w-screen h-screen"
      )}
    >
      <div className={clsx("relative translate-x-20")}>
        <div
          className={clsx(
            "border border-yellow-800 opacity-15",
            "shadow-[0px_0px_4px_#ffffff] shadow-slate-300",
            "bg-gradient-to-r from-yellow-600 to-yellow-700",
            "w-[20rem] h-[24rem]",
            "rounded-[3rem]",
            "absolute -translate-y-1/2 top-1/2 -left-2 -translate-x-1/2"
          )}
        >
          <img
            data-testid="logo"
            src="/star-wars-logo.png"
            className={clsx(
              "w-[22rem] -rotate-90 z-[0]",
              "translate-y-1/2 -translate-x-20"
            )}
            alt="Star Wars Logo"
          />
        </div>

        <div
          className={clsx(
            "relative",
            "shadow-[0px_0px_0px_1px] shadow-yellow-600",
            "flex flex-col py-8 pl-32",
            "border border-slate-800 rounded-[2rem]",
            "w-[50rem] h-fit min-h-[28rem]",
            "bg-gradient-to-r from-slate-800 to-slate-900"
          )}
        >
          <button
            onClick={() => nav(ROUTES.home.path)}
            className="absolute -top-3 -right-3 text-slate-100 rounded-full bg-slate-700 border border-yellow-600 p-2"
          >
            <BackIcon className="text-slate-100" />
          </button>
          <div
            className={clsx(
              "shadow-[0px_0px_0px_1px] shadow-yellow-600",
              "rounded-full w-[12rem] min-h-[12rem] bg-slate-900 border-2 border-slate-800",
              "absolute -translate-y-1/2 top-1/2 left-0 -translate-x-1/2",
              "flex flex-col items-center justify-center"
            )}
          >
            {busy ? (
              <Spinner width={48} />
            ) : (
              <img
                className="rounded-full w-[12rem] border-2 border-slate-800"
                src={currentPeople?.imageUrl}
                alt={currentPeople?.name}
              />
            )}
          </div>
          {busy ? (
            <div className="flex flex-col items-center justify-center w-full min-h-[25rem]">
              <Spinner width={128} height={128} />
            </div>
          ) : (
            <div className="flex flex-col">
              <h1 className="text-4xl font-exo text-yellow-500 mb-2">
                {currentPeople?.name}
              </h1>
              <div className=" grid grid-cols-3">
                <StatRow label="Born" value={currentPeople?.birth_year} />
                <StatRow label="Height" value={currentPeople?.height} />
                <StatRow label="Mass" value={currentPeople?.mass} />
              </div>
              <div className=" grid grid-cols-3">
                <StatRow label="Hair color" value={currentPeople?.hair_color} />
                <StatRow label="Skin color" value={currentPeople?.skin_color} />
                <StatRow label="Gender" value={currentPeople?.gender} />
              </div>
              <h1 className="mt-4 text-lime-500 font-exo">Home Planet:</h1>
              <div className="grid grid-cols-3">
                <StatRow label="Name" value={currentPeople?.homeworld?.name} />
                <StatRow
                  label="Terrain"
                  value={currentPeople?.homeworld?.terrain}
                />
                <StatRow
                  label="Population"
                  value={currentPeople?.homeworld?.population}
                />
              </div>

              {currentPeople && currentPeople.species.length > 0 && (
                <div>
                  <h1 className="mt-4 text-lime-500 font-exo">Species</h1>
                  <div className="grid grid-cols-3">
                    {currentPeople?.species.map((species, i) => (
                      <div className="mb-2" key={i}>
                        <StatRow label="Name" value={species.name} />
                        <StatRow
                          label="Avg Lifespan"
                          value={species.average_lifespan}
                        />
                        <StatRow
                          label="Classification"
                          value={species.classification}
                        />
                        <StatRow label="Language" value={species.language} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {currentPeople && currentPeople.films.length > 0 && (
                <div>
                  <h1 className="mt-4 text-lime-500 font-exo">Films:</h1>
                  <div className="grid grid-cols-3">
                    {currentPeople?.films.map((film, i) => (
                      <div className="mb-2" key={i}>
                        <StatRow label="Title" value={film.title} />
                        <StatRow label="Director" value={film.director} />
                        <StatRow label="Producers" value={film.producer} />
                        <StatRow
                          label="Release Date"
                          value={film.release_date}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <p className="mt-4">
        Press <b className="font-exo text-lime-500">ESC</b> to go back home
      </p>
    </section>
  );
};

export default Person;
