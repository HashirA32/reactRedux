import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const amount = useSelector(state=> state.amount)
  return (
    <>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">The Store of Future</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
      <form class="d-flex" role="search">
       
        <button class="btn btn-primary" disabled= {true} type="submit">Added Items : {amount}</button>
      </form>
    </div>

</nav>

    </>
  )
}

export default Navbar
