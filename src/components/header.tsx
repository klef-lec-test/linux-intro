import React from "react"

const Header = ({ title }: any) => {
  return (
    <header>
      <p className="text-3xl">{title}</p>
    </header>
  )
}

export default Header