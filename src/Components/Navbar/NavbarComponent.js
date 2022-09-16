import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

import { SearchContext } from "../SearchContext";

function NavbarComponent() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="zindex-popover"
      style={{ zIndex: "5" }}
    >
      <Container fluid>
        <Navbar.Brand
          className="ms-3 fw-bold "
          style={{ fontSize: "30px" }}
          href="#"
        >
          Udemy{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex align-items-center justify-content-center fw-bold"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link to={"/home"}>Home</Nav.Link>
            <Nav.Link href="#action2">Categories</Nav.Link>

            <Nav.Link>
              <SearchContext.Consumer>
                {({ search, setSearch }) => (
                  <SearchDiv className="d-flex position-relative">
                    <div className="position-absolute align-items-center p-2 ps-3">
                      <i className="   fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input
                      data-testid="test-1"
                      className=" rounded-pill w-100 h-100 ps-5 py-2 d-flex align-items-center"
                      type="text"
                      placeholder="search..."
                      value={search}
                      onKeyDown={(e) => {
                        if (e.key === " ") {
                          e.target.value = e.target.value + " ";
                          setSearch((e) => e + " ");
                        }
                      }}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </SearchDiv>
                )}
              </SearchContext.Consumer>
            </Nav.Link>

            <Nav.Link href="#action1"> Udemy Business</Nav.Link>
            <Nav.Link href="#action1"> Teach on udemy</Nav.Link>
          </Nav>

          <div className="me-2">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <Button variant="light me-2 py-2 rounded-0 fw-bold bg-white border text-dark px-3">
            Log in{" "}
          </Button>
          <Button variant="dark rounded-0 fw-bold py-2 me-2 ">Sign up</Button>
          <div className="border p-2  me-3">
            <i className="fa-solid fa-globe"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const SearchDiv = styled.div`
  width: 400px;

  input {
    border: 1px solid black;

    ::placeholder {
      margin-left: 30px;
    }
  }
`;

export default NavbarComponent;
