import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../stroe";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSelectedSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSelectedSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search Games..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
