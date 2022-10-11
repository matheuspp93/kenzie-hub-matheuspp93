import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 5%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.quartiary};

  @media (min-width: 1024px) {
    padding: 20px 20%;
  }

  img {
    width: 100px;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  width: 43px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.gray.secondary};
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.gray.withe};
  font-size: 12px;
  font-weight: 600;
  line-height: 28.42px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.tertiary};
  }
`;

export const DashboardContainer = styled.main``;

export const ContainerUser = styled.section`
  height: 95px;
  padding: 0 5%;
  margin-top: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.quartiary};
  @media (min-width: 1024px) {
    padding: 20px 20%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.gray.withe};
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }
  p {
    color: ${({ theme }) => theme.colors.gray.quartiary};
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 10px;
  }
`;

export const ContainerError = styled.section`
  height: 136px;
  padding: 0 5%;
  margin-top: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.quartiary};
  @media (min-width: 1024px) {
    padding: 20px 20%;
  }

  h2 {
    color: ${({ theme }) => theme.colors.gray.withe};
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }
  p {
    color: ${({ theme }) => theme.colors.gray.withe};
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 10px;
  }
`;
