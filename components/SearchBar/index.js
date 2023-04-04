import styled from "styled-components";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.target.blur();
    }
  };

  const handleFocus = (event) => {
    const input = event.target;
    input.selectionStart = input.selectionEnd = input.value.length;
  };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder="search for movies..."
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />
    </InputContainer>
  );
};

export default SearchBar;

const StyledInput = styled.input`
  width: 90vw;
  max-width: 400px;
  padding: 10px 20px;
  margin: 20px 0 10px 0;
  font-size: 18px;
  border: 2px solid #202020;
  border-radius: 5px;
  outline: none;
  font-family: "Bangers";

  &:focus {
    border-color: #202020;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2);
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;
