import React from 'react'
import { NavLink } from 'react-router-dom'
function ErrorPage() {
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{marginTop:"200px"}}>Error 404</h1>
            <p class="mb-5">
                NO PAGE FOUND!
            </p>
            <NavLink to='/'>go back</NavLink>
        </div>

    )
}

export default ErrorPage
