import React from 'react'

const NotFound = () => {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      flexDirection:"column",
    }}>
        <h2>404 Page not found</h2>
        <a href="/">Back to Home</a>
    </div>
  )
}

export default NotFound