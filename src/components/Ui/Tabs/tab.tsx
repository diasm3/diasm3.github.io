// components/ui/tabs.tsx
"use client"

import React from "react"
import styled from "styled-components"

interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

interface TabsListProps {
  children: React.ReactNode
}

interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  $isActive?: boolean
  onClick?: () => void
}

interface TabsContentProps {
  value: string
  activeValue?: string
  children: React.ReactNode
}

const TabsContext = React.createContext<{
  value: string
  onValueChange: (value: string) => void
}>({
  value: "",
  onValueChange: () => {},
})

export function Tabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
}: TabsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "")
  const value = controlledValue !== undefined ? controlledValue : internalValue

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      setInternalValue(newValue)
      onValueChange?.(newValue)
    },
    [onValueChange]
  )

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <TabsRoot>{children}</TabsRoot>
    </TabsContext.Provider>
  )
}

export function TabsList({ children }: TabsListProps) {
  return <StyledTabsList>{children}</StyledTabsList>
}

export function TabsTrigger({ value, children, onClick }: TabsTriggerProps) {
  const { value: activeValue, onValueChange } = React.useContext(TabsContext)
  const isActive = value === activeValue

  const handleClick = () => {
    onValueChange(value)
    onClick?.()
  }

  return (
    <StyledTabsTrigger type="button" $isActive={isActive} onClick={handleClick}>
      {children}
    </StyledTabsTrigger>
  )
}

export function TabsContent({ value, children }: TabsContentProps) {
  const { value: activeValue } = React.useContext(TabsContext)

  if (value !== activeValue) {
    return null
  }

  return <StyledTabsContent>{children}</StyledTabsContent>
}

const TabsRoot = styled.div`
  width: 100%;
`

const StyledTabsList = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const StyledTabsTrigger = styled.button<{ $isActive?: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  color: ${(props) =>
    props.$isActive
      ? props.theme.colors.primary
      : props.theme.colors.textSecondary};
  border-bottom: 2px solid
    ${(props) => (props.$isActive ? props.theme.colors.primary : "transparent")};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const StyledTabsContent = styled.div`
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
