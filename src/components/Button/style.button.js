/* eslint-disable default-case */
import styled, { css } from "styled-components";

const Button = styled.button`
  ${({ font }) => {
    switch (font) {
      case "primary":
        return css`
          width: 264.66px;
          height: 38.5px;
          padding: 0 22px 0 22px;
          border-radius: 4.06px;
          background-color: ${({ theme }) => theme.colors.pink.primary};
          color: ${({ theme }) => theme.colors.gray.withe};
          margin-top: 20.42px;
          transition: 0.5s;
          &:hover {
            &:hover {
              background-color: ${({ theme }) => theme.colors.pink.tertiary};
            }
          }
        `;
      case "secondary":
        return css`
          width: 264.66px;
          height: 38.5px;
          padding: 0 22px 0 22px;
          border-radius: 4.06px;
          background-color: ${({ theme }) => theme.colors.gray.quartiary};
          color: ${({ theme }) => theme.colors.gray.withe};
          margin-top: 13.42px;
        `;
      case "tertiary":
        return css`
          width: 264.66px;
          height: 38.5px;
          padding: 0 22px 0 22px;
          border-radius: 4.06px;
          background-color: ${({ theme }) => theme.colors.pink.tertiary};
          color: ${({ theme }) => theme.colors.gray.withe};
          margin-top: 16.42px;
          font-size: 12.79px;
          font-weight: 500;
          line-height: 21.1px;
        `;
    }
  }}
`;

export default Button;
