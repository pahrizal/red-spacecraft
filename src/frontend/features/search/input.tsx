import clsx from "clsx";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { People } from "../../../backend/swapi/schema";
import usePeople from "../hooks/person";

interface Props extends React.HTMLAttributes<HTMLInputElement> {}
const SearchInput: FC<Props> = ({
  children,
  className,
  placeholder,
  ...rest
}) => {
  const { loading, peoples, fetchAll } = usePeople();
  const [searchValue, setSearchValue] = useState("");
  const [filtered, setFiltered] = useState<People[]>([]);
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);
  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    const newFilteredData = peoples
      .filter((person: People) =>
        person.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
    setFiltered(newFilteredData);
  }, [peoples, searchValue]);
  return (
    <div
      className={clsx(
        "flex flex-col",
        "border border-yellow-300",
        "rounded-xl",
        "w-full py-2"
      )}
    >
      {loading ? (
        <div className="px-4">Onboarding all crew, please wait...</div>
      ) : (
        <div
          className={clsx("flex px-4 flex-row items-center space-x-2 py-2", {
            "mb-3 pb-4 border-b border-yellow-300":
              searchValue.length > 0 && filtered.length > 0,
          })}
        >
          <input
            className={clsx(
              "outline-none bg-transparent",
              "w-full",
              "text-yellow-500",
              className
            )}
            onChange={handleSearch}
            disabled={loading}
            autoFocus
            placeholder={
              placeholder || "Search people on the Star Wars canon universe!"
            }
            type="search"
            {...rest}
          />
        </div>
      )}
      {!loading && searchValue && (
        <ul className="h-full max-h-80 overflow-scroll">
          {filtered.map((people, i) => (
            <li
              key={i}
              className={clsx(
                "py-2 px-4",
                "cursor-pointer font-exo text-[1.4rem]",
                "border-l-4 border-transparent",
                "hover:text-yellow-500 hover:border-yellow-300"
              )}
            >
              <Link
                className=" flex flex-row items-center"
                to={`/person/${people.id}`}
              >
                <img
                  className="w-[3rem] rounded-full border-2 border-current mr-2"
                  src={people.imageUrl}
                  alt={people.name}
                />
                {people.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
