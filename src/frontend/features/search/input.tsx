import clsx from "clsx";
import React, { FC } from "react";
import SearchIcon from "../../assets/icons/search";

interface Props extends React.HTMLAttributes<HTMLInputElement> {}
const SearchInput: FC<Props> = ({
  children,
  className,
  placeholder,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "border border-yellow-300",
        "rounded-xl",
        "w-full px-4 py-2",
        "flex flex-row items-center space-x-2"
      )}
    >
      <input
        className={clsx(
          "outline-none bg-transparent",
          "w-full",
          "text-yellow-500",
          className
        )}
        autoFocus
        placeholder={
          placeholder || "Search people on the Star Wars canon universe!"
        }
        type="search"
        {...rest}
      />
    </div>
  );
};

export default SearchInput;
