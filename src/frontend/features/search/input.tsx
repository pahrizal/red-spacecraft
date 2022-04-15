import clsx from "clsx";
import React, { FC, useCallback, useEffect, useState } from "react";
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
    const newFilteredData = peoples.filter((person: People) =>
      person.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFiltered(newFilteredData);
  }, [peoples, searchValue]);
  return (
    <div
      className={clsx(
        "flex flex-col",
        "border border-yellow-300",
        "rounded-xl",
        "w-full px-4 py-2"
      )}
    >
      {loading ? (
        <div>Onboarding all crew, please wait...</div>
      ) : (
        <div
          className={clsx("flex flex-row items-center space-x-2 py-2", {
            "mb-3 border-b border-slate-100":
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
              className="py-2 cursor-pointer border-b border-transparent hover:text-yellow-500"
            >
              {people.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
