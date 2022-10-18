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
    span {
      font-size: 12.21px;
      font-weight: 400;
      line-height: 22.33px;
      color: ${({ theme }) => theme.colors.gray.quartiary};
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
export const TilteMensagem = styled.span`
  margin: 25px auto;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.gray.withe};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50px;
  width: 276px;
  height: 76px;
  background-color: ${({ theme }) => theme.colors.gray.quartiary};

  @media (min-width: 1024px) {
    font-size: 21px;
    width: 445px;
  }
`;
