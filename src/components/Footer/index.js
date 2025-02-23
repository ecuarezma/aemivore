import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBandcamp } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 25%;
  padding: 2rem;

  svg {
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.6);
    transition: ease-in 100ms;
    &:hover {
      cursor: pointer;
      color: rgb(0, 102, 255);
    }
  }

  @media (min-width: 900px) {
    height: 300px;
    padding: 2rem 2rem 4rem;
    svg {
      font-size: 3rem;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <a href="mailto:aemivore@gmail.com" id="icon-email">
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
    <a
      href="https://aemivore.bandcamp.com/"
      target="noopener"
      id="icon-bandcamp"
    >
      <FontAwesomeIcon icon={faBandcamp} />
    </a>
  </StyledFooter>
);
export default Footer;
