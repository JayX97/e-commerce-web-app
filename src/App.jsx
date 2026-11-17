import './App.css'

function App() {
  return (
    <div id='app'>
      <div id='app-header'>
        <h1>JayMart</h1>
        <span id='cart-button'>Check Cart</span>
        <form id='search-form'>
          <input type='text' id='search-bar' />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div>
        <h2>Welcome to JayMart!</h2>
        <div className='dummy-item'>Dummy Item 1</div>
        <div className='dummy-item'>Dummy Item 2</div>
        <div className='dummy-item'>Dummy Item 3</div>
        <div className='dummy-item'>Dummy Item 4</div>
        <div className='dummy-item'>Dummy Item 5</div>
      </div>
      <footer>&copy;2026 Jason Fernandez. All rights reserved.</footer>
    </div>
  )
}

export default App
