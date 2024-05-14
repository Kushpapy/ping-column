import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const StyledFooter = styled.div`
  color: var(--Blue);
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  & div {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: 1px thin var(--Blue);
    display: grid;
    place-items: center;
    transition: 0.3s all ease-in;

    &:hover {
      background-color: var(--Blue);
      color: #fff;
    }
  }

  & p {
    color: var(--Gray);
  }
`;

const IconBox = styled.section`
  display: flex;
  gap: 0.8rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <IconBox>
        <div>
          <FaFacebookF />
        </div>
        <div>
          <FaTwitter />
        </div>
        <div>
          <FaInstagram />
        </div>
      </IconBox>
      <p>&copy; Copyright Ping. All rights reserved.</p>
    </StyledFooter>
  );
}

export default Footer;
