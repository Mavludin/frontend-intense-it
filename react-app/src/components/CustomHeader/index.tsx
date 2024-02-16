import React from 'react'
import { UserButton } from '../UserButton'

export const CustomHeader = ({ decorator, withUserButton }) => {
  return (
    <header>
      <h3>LOGO</h3>
      <nav>
        <a href="">Link 1</a>
        <a href="">Link 2</a>
        <a href="">Link 3</a>
      </nav>

      {/* {decorator} */}
      {withUserButton && <UserButton />}
    </header>
  )
}
