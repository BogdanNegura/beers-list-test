import styled from 'styled-components'

export const StyledSelected = styled.div`
  background: green;
  width: 50%;
  height: 100%;
  top: 0;
  transition: 0.25s;
  left: ${ ({ left }) => `${left * 50}%` };
  position: absolute;
`
export const StyledOption = styled.div`
  // border: 1px solid green;
  flex-grow: 1;
  flex-basis: 50%;
  text-align: center;
  position: relative;
`
export const StyledToggle = styled.div`
  border: 2px solid #040404;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  width: 250px;
  line-height: 32px;
  position: relative;
  overflow: hidden;
  box-shadow: 1px 1px 3px #404040;
  margin: 5px;
`
