import React from 'react'
import {Link} from 'react-router-dom'

export default function index() {
    return (
        <nav>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tracker">Tracker</Link>
        </li>
        <li>
          <Link to="/journal">Journal</Link>
        </li>
        <li>
          <Link to="/stats">Stats</Link>
        </li>
      </ul>
        </nav>
    )
}
