import React from 'react'

const ProtectedRoute = ({user,children}) => {
    if(!user) {
        return <h1>User Not found</h1>
    }
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute