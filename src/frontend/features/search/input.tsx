import clsx from "clsx";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { People } from "../../../backend/swapi/schema";
import { ROUTES } from "../router/definition";
import { useSearch } from "./hook";

interface Props extends React.HTMLAttributes<HTMLInputElement> {}

const SearchInput: FC<Props> = ({
  children,
  className,
  placeholder,
  ...rest
}) => {
  const nav = useNavigate();
  const { busy, searchPeople, filteredPeoples, query, setSelected } =
    useSearch();
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [inputValue, setInputValue] = useState("");
  const listRef = React.useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [highlightedPeople, setHighlightedPeople] = useState<People | null>(
    null
  );
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setInputValue(keyword);
  }, []);

  const handleSelect = useCallback(
    (people?: People) => {
      if (people) {
        setSelected(people);
        const personId = people.id;
        nav(ROUTES.person.path.replace(":id", String(personId)));
      } else if (highlightedPeople) {
        setSelected(highlightedPeople);
        const personId = highlightedPeople.id;
        nav(ROUTES.person.path.replace(":id", String(personId)));
      }
    },
    [highlightedPeople, nav, setSelected]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "Enter":
          e.preventDefault();
          // navigate page to selected people detail
          if (highlightedPeople) {
            handleSelect();
          }
          break;
        case "Escape":
          e.preventDefault();
          setInputValue("");
          break;
        case "ArrowDown":
          e.preventDefault();
          if (filteredPeoples.length > 0) {
            setSelectedItemIndex(
              Math.min(selectedItemIndex + 1, filteredPeoples.length - 1)
            );
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (filteredPeoples.length > 0) {
            setSelectedItemIndex(Math.max(selectedItemIndex - 1, 0));
          }
          break;
      }
    },
    [highlightedPeople, filteredPeoples.length, handleSelect, selectedItemIndex]
  );

  // filter people on inputValue changes
  useEffect(() => {
    if (!inputValue) {
      setSelectedItemIndex(-1);
      setSelected(null);
      inputRef.current!.value = "";
      searchPeople("");
    } else {
      searchPeople(inputValue);
    }
  }, [inputValue, searchPeople, setSelected]);

  // set highlighted people
  useEffect(() => {
    if (selectedItemIndex >= 0 && filteredPeoples.length > 0) {
      setHighlightedPeople(filteredPeoples[selectedItemIndex]);
    }
  }, [filteredPeoples, selectedItemIndex]);
  return (
    <div
      data-testid="search-container"
      className={clsx(
        "flex flex-col",
        "border border-yellow-300",
        "rounded-xl",
        "w-full py-2"
      )}
    >
      {busy ? (
        <div className="px-4">Scanning the universe, please wait...</div>
      ) : (
        <div
          className={clsx("flex px-4 flex-row items-center space-x-2 py-2", {
            "mb-3 pb-4 border-b border-yellow-300":
              query.length > 0 && filteredPeoples.length > 0,
          })}
        >
          <input
            ref={inputRef}
            data-testid="search-input"
            className={clsx(
              "outline-none bg-transparent",
              "w-full",
              "text-yellow-500",
              className
            )}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            disabled={busy}
            autoFocus
            placeholder={
              placeholder || "Search people on the Star Wars canon universe!"
            }
            type="search"
            {...rest}
          />
        </div>
      )}
      {!busy && query && (
        <ul
          data-testid="search-results"
          style={{
            maxHeight: "15rem",
            overflowY: "auto",
            padding: "0px",
            marginTop: 16,
            marginBottom: 4,
          }}
          ref={listRef}
          className="h-full"
        >
          {filteredPeoples.length > 0 &&
            filteredPeoples.map((people, i) => (
              <ListItem
                onSelect={handleSelect}
                highlighted={i === selectedItemIndex}
                key={i}
                index={i}
                {...people}
                onHighlight={(people, el) => {
                  if (!listRef.current) return;
                  //if el position is out of bottom viewport, scroll down listRef to show el
                  if (
                    el.offsetTop - listRef.current.offsetTop + el.offsetHeight >
                    listRef.current.scrollTop + listRef.current.offsetHeight
                  ) {
                    listRef.current.scrollTop += el.offsetHeight;
                  }
                  // if el position is out of top viewport, scroll up listRef to show el
                  else if (
                    el.offsetTop - listRef.current.offsetTop <
                    listRef.current.scrollTop
                  ) {
                    listRef.current.scrollTop -= el.offsetHeight;
                  }
                }}
              />
            ))}
          {filteredPeoples.length === 0 && (
            <li className="text-center text-yellow-200">
              <b className="text-lime-400">{inputValue}</b> not found 😓
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

interface ListItemProps extends People {
  index: number;
  onHighlight: (people: People, el: HTMLLIElement) => void;
  highlighted: boolean;
  onSelect: (people: People) => void;
}
const ListItem: FC<ListItemProps> = ({
  index,
  highlighted,
  onHighlight,
  onSelect,
  ...rest
}) => {
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (ref.current && highlighted) {
      onHighlight(rest, ref.current);
    }
  }, [highlighted, onHighlight, rest]);
  return (
    <li
      data-testid="search-item"
      ref={ref}
      style={{
        height: "5rem",
      }}
      onClick={() => onSelect(rest)}
      className={clsx(
        "py-2 px-4",
        "flex flex-row items-center",
        "cursor-pointer font-exo text-[1.4rem]",
        "border-l-4 border-transparent",
        "hover:text-yellow-500 hover:border-yellow-300",
        { highlighted: highlighted }
      )}
    >
      <img
        className="w-[3rem] rounded-full border-2 border-current mr-2"
        src={rest.imageUrl}
        alt={rest.name}
      />
      {rest.name}
    </li>
  );
};

export default SearchInput;
