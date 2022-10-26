import { Link } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray.secondary};
  padding: 33px 13px 33px 13px;
  border-radius: 3.21px;
  width: 296px;
  height: auto;
  margin: 0 auto;
  margin-top: 16px;

  label {
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.gray.withe};
    font-size: 9.74px;
    font-weight: 400;
    line-height: 22.46px;
  }
  select {
    background-color: ${({ theme }) => theme.colors.gray.tertiary};
    color: ${({ theme }) => theme.colors.gray.quartiary};
    width: 264.66px;
    height: 38.5px;
    border: 1.22px solid ${({ theme }) => theme.colors.gray.tertiary};
    border-radius: 3.21px;
    padding: 0 13px 0 13px;
    margin-top: 16.32px;
    font-size: 13px;
    font-weight: 400;
    line-height: 21px;
  }
  h2 {
    font-size: 14.39px;
    font-weight: 700;
    line-height: 22.39px;
    color: ${({ theme }) => theme.colors.gray.withe};
    margin: 0 auto;
  }
  span {
    margin: 0 auto;
    margin-top: 17px;
    font-size: 9.59px;
    font-weight: 400;
    line-height: 17.59px;
    color: ${({ theme }) => theme.colors.gray.quartiary};
    margin-bottom: 10px;
  }
  small {
    margin-top: 5px;
    font-size: 9.63px;
    font-weight: 600;
    line-height: 14.44px;
    color: ${({ theme }) => theme.colors.gray.quartiary};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  width: 296px;
  height: auto;
  margin: 20px auto;

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
  font-size: 10px;
  font-weight: 400;
  line-height: 28.42px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.tertiary};
  }
`;
