import styled from "styled-components";

export const Container = styled.div`
  border: solid 2px ${({ theme }) => theme.color.border};
  border-radius: 20px;
  max-width: 800px;
  margin: 0 auto;
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.div``;
export const Tools = styled.h1`
  color: ${({ theme }) => theme.color.main};
  line-height: 24px;
  margin: 2px;
`;
export const Score = styled.div`
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 10px;
`;
export const Designation = styled.div`
  color: ${({ theme }) => theme.color.score};
  padding: 10px 24px 0;
`;
export const Points = styled.div`
  color: ${({ theme }) => theme.color.points};
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  line-height: 42px;
`;
