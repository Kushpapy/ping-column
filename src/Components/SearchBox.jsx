import { useState } from "react";
import styled from "styled-components";

const StyledSearchBox = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 75fr 25fr;
  gap: 1.6rem;
  transition: 0.2s all;

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    & p {
      text-align: left;
      color: var(--Light-Red);
    }
  }
`;

const Input = styled.input`
  padding: 1.4rem 2.4rem;
  width: 100%;
  border-radius: 25px;
  border: 1px solid var(--Pale-Blue);
  font-size: inherit;
  font-family: inherit;
  font-weight: 400;
  transition: 0.2s all;

  &:focus {
    outline: none;
  }

  &.error {
    border: 1px solid var(--Light-Red);
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 1.4rem 2.4rem;
  border-radius: 25px;
  background-color: var(--Blue);
  border: none;
  text-align: center;
  cursor: pointer;
  color: #fff;
  max-height: 4.4rem;
  box-shadow: 0px 3px 3px hsla(223, 87%, 63%);
`;

function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function onSubmit(e) {
    e.preventDefault();

    if (!emailRegex.test(inputValue.toLowerCase().trim())) {
      setError(true);
    } else {
      setInputValue("");
      setError(false);
    }
  }

  return (
    <StyledSearchBox onSubmit={onSubmit}>
      <div>
        <Input
          placeholder="Your email address..."
          type="email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={error ? "error" : ""}
        ></Input>
        {error && <p>please provide a valid email address</p>}
      </div>
      <Button>Notify Me</Button>
    </StyledSearchBox>
  );
}

export default SearchBox;
