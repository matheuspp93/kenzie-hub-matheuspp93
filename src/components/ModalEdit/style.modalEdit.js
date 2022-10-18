import styled from "styled-components";

export const ContainerTech = styled.section`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-color: #00000080;
  padding: 100px 50px 0 25px;
  @media (min-width: 1024px) {
    padding: 100px 50x 0 25px;
  }
`;

export const ModalDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.gray.primary};
  width: 250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 4px;
  @media (min-width: 1024px) {
    width: 300px;
  }
  div {
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.gray.tertiary};
    padding: 10px;

    h2 {
      font-size: 14px;
      font-weight: 700;
      line-height: 14px;
    }
  }

  form {
    background-color: ${({ theme }) => theme.colors.gray.secondary};
    display: flex;
    flex-direction: column;
    padding: 10px;

    label {
      font-size: 12.18px;
      font-weight: 400px;
      margin-bottom: 10px;
      margin-top: 10px;
      color: ${({ theme }) => theme.colors.gray.withe};
    }
    input {
      background-color: ${({ theme }) => theme.colors.gray.tertiary};
      height: 38px;
      border: 1px solid ${({ theme }) => theme.colors.gray.withe};
      border-radius: 4px;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      padding: 10px;
    }
    select {
      background-color: ${({ theme }) => theme.colors.gray.tertiary};
      color: ${({ theme }) => theme.colors.gray.quartiary};

      height: 38.5px;
      border: 1.22px solid ${({ theme }) => theme.colors.gray.withe};
      border-radius: 3.21px;
      padding: 10px;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
    }
    button {
      background-color: ${({ theme }) => theme.colors.pink.primary};
      margin-top: 10px;
      height: 38px;
      border-radius: 4px;
      width: 101px;
    }
  }
`;
export const EcluirTech = styled.button`
  background-color: ${({ theme }) => theme.colors.gray.tertiary};
  margin-top: 10px;
  height: 38px;
  border-radius: 4px;
`;
