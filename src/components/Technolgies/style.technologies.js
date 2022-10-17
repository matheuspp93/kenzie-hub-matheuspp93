import styled from "styled-components";

export const TechContainer = styled.div`
  ul {
    background-color: ${({ theme }) => theme.colors.gray.secondary};
    padding: 5px;
    border-radius: 4px;
    margin-top: 10px;
  }
  li {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray.primary};
    border-radius: 4;
    margin: 10px 5px;

    h3 {
      font-size: 14.21px;
      font-weight: 700;
      line-height: 22.33px;
      color: ${({ theme }) => theme.colors.gray.withe};
    }
  }
`;

export const TechTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
  }
  button {
    width: 30px;
    height: 30px;
    background: ${({ theme }) => theme.colors.gray.secondary};
    border-radius: 4px;
    border: none;
    color: ${({ theme }) => theme.colors.gray.withe};
  }
`;
