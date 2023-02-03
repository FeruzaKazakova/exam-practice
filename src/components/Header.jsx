import React, { memo } from 'react'
import styled, { ThemeContext } from 'styled-components'

const Header = ({toggleTheme}) => {
  // const {theme, setTheme} = useContext(ThemeContext);

  return (
    <>
    <div>
    <Container>
      <h2>Task</h2>
      <div>
        <button onClick={toggleTheme}>Night Theme</button>
      </div>
    </Container>
    </div>
    </>
  )
}
export default memo(Header);

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`