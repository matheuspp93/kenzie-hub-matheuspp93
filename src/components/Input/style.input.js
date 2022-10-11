/* eslint-disable default-case */
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.gray.tertiary};
  color: ${({ theme }) => theme.colors.gray.withe};
  ${({ font }) => {
    switch (font) {
      case "primary":
        return css`
          width: 264.66px;
          height: 38.5px;
          border: 1.22px solid ${({ theme }) => theme.colors.gray.withe};
          border-radius: 3.21px;
          padding: 0 13px 0 13px;
          margin-top: 13.32px;
          font-size: 13px;
        `;
      case "secondary":
        return css`
          width: 264.66px;
          height: 38.5px;
          border: 1.22px solid ${({ theme }) => theme.colors.gray.tertiary};
          border-radius: 3.21px;
          padding: 0 13px 0 13px;
          margin-top: 4.32px;
          font-size: 13px;
          font-weight: 400;
          line-height: 21px;
        `;
    }
  }}
`;

export default StyledInput;
