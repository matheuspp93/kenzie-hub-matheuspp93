import { Link } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray.secondary};
  padding: 18px 18px 0 18px;
  border-radius: 3.21px;
  width: 296px;
  height: 387px;
  margin: 0 auto;
  margin-top: 16px;

  h2 {
    margin-top: 19px;
    margin: 0 auto;
    font-size: 14.44px;
    font-weight: 700;
    line-height: 22.46px;
    color: ${({ theme }) => theme.colors.gray.withe};
  }
  label {
    margin-top: 12px;
    color: ${({ theme }) => theme.colors.gray.withe};
    font-size: 14.44px;
    font-weight: 400;
    line-height: 22.46px;
  }

  p {
    margin: 0 auto;
    font-size: 9.63px;
    font-weight: 600;
    line-height: 14.44px;
    color: ${({ theme }) => theme.colors.gray.quartiary};
    margin-top: 15px;
  }
`;

export const Linkb = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 264.66px;
  height: 38.5px;
  padding: 0 22px 0 22px;
  border-radius: 4.06px;
  background-color: ${({ theme }) => theme.colors.gray.quartiary};
  color: ${({ theme }) => theme.colors.gray.withe};
  margin-top: 13.42px;
  text-decoration: none;
  transition: 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.tertiary};
  }
`;
