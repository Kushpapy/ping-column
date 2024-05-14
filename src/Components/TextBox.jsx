import styled from "styled-components";

const StyledTextBox = styled.div``;

const H1 = styled.div`
  font-size: 3.6rem;
  color: var(--Gray);

  & span {
    color: var(--Very-Dark-Blue);
  }
`;

const P = styled.p`
  font-size: 1.4rem;
  color: var(--Very-Dark-Blue);
`;

function TextBox() {
  return (
    <StyledTextBox>
      <H1>
        We are launching <span>soon!</span>
      </H1>
      <P>Subscribe and get notified</P>
    </StyledTextBox>
  );
}

export default TextBox;
