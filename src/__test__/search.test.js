import { fireEvent, render, screen } from "@testing-library/react";
import NavbarComponent from "../Components/Navbar/NavbarComponent";
import { SearchContext } from "../Components/SearchContext";

it("test value search", async () => {
  const search = "search value";
  const setSearch = jest.fn();

  render(
    <SearchContext.Provider value={{ search, setSearch }}>
      <NavbarComponent search={""} setSearch={() => {}} />
    </SearchContext.Provider>
  );

  const searchInput = screen.getByPlaceholderText("search...");

  fireEvent.change(searchInput, { target: { value: "new search value" } });

  expect(searchInput.value).toBe("search value");
  expect(setSearch).toBeCalledTimes(1);
  expect(setSearch).toBeCalledWith("new search value");
});
