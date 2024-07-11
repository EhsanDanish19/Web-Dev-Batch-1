import React from 'react'

export default function CompB(props) {
    const {Name,Age, Email}=props
  return (
    <React.Fragment>
      <h4>Name:{Name}</h4>
      <p>Age:{Age}</p>
      <p>Email:{Email}</p>
    </React.Fragment>
  )
}
