import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;

  img {
    display: flex;
    width: 205px;
    margin: 135px auto 0;

    @media (min-width: 1024px) {
      width: 375px;
    }
  }
`;
export const LinkStyled = styled(Link)`
  display: flex;
  margin: 25px auto 0;
  cursor: pointer;
  width: 200px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.gray.secondary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray.withe};
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.tertiary};
  }

  @media (min-width: 1024px) {
    width: 300px;
  }
`;
