// App.jsx
import React from 'react'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      {/* Using the UserProfile component with props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
  )
}

export default App
