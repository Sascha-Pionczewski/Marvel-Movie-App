import { useContext } from "react";
import Heading from "../components/Heading";
import { ThemeContext } from "./_app";
import styled from "styled-components";
import Backbutton from "../components/Backbutton";

export default function Settings() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Heading>Settings</Heading>
      <StyledSettingsContainer>
        <Backbutton />
        <h2>Dark Mode:</h2>
        <StyledInput
          type="checkbox"
          data-testid="toggle"
          id="toggle"
          onClick={toggleTheme}
        />
        <StyledLabel htmlFor="toggle"></StyledLabel>
      </StyledSettingsContainer>
    </>
  );
}

const StyledInput = styled.input`
  visibility: hidden;
  &:checked + label {
    transform: rotate(360deg);
    background-color: #000;
    &:before {
      transform: translateX(50px);
      background-color: #fff;
    }
  }
`;

const StyledLabel = styled.label`
  display: flex;
  width: 90px;
  height: 45px;
  border: 4px solid;
  border-radius: 99em;
  position: relative;
  transition: transform 0.75s ease-in-out;
  transform-origin: 50% 50%;
  cursor: pointer;

  &:before {
    transition: transform 0.75s ease;
    transition-delay: 0.5s;
    content: "";
    // display: block;
    position: absolute;
    width: 27px;
    height: 27px;
    background-color: #000;
    border-radius: 50%;
    top: 9px;
    left: 6px;
  }
`;

const StyledSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
