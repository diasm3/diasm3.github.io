import styled from "styled-components"
// src/components/SearchBox/styles.ts
export const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 16px;
  -webkit-appearance: none; // iOS 스타일 제거

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
