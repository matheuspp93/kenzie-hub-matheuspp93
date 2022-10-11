import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;

  img {
    display: flex;
    margin: 0 auto;
    margin-top: 135px;
  }
`;
export const LinkStyled = styled(Link)`
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  width: 183px;
  height: 45px;
  margin-top: 25px;
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
`;
