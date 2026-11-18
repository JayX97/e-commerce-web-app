import './App.css'

function App() {
  return (
    <div id='app'>
      <div id='app-header' className='bg-amber-400 flex w-screen p-3 flex-wrap gap-3 items-center'>
        <h1 className='text-white text-3xl font-bold mr-auto'>JayMart</h1>
        <span id='cart-button' className='text-white'>Check Cart</span>
        <form id='search-form' className='flex w-screen mx-auto justify-between'>
          <input type='text' id='search-bar' className='bg-white w-full px-2 py-[0.20rem] border border-r-0 border-black rounded-l-lg' />
          <button type='submit' className='bg-gray-200 border border-black rounded-r-lg'>Search</button>
        </form>
      </div>
      <div className='w-screen flex p-3 flex-col items-center'>
        <h2 className='text-2xl w-full border-b border-gray-400'>Welcome to JayMart!</h2>
        <div className='w-full px-4 py-15 border-b border-gray-400'>Dummy Item 1</div>
        <div className='w-full px-4 py-15 border-b border-gray-400'>Dummy Item 2</div>
        <div className='w-full px-4 py-15 border-b border-gray-400'>Dummy Item 3</div>
        <div className='w-full px-4 py-15 border-b border-gray-400'>Dummy Item 4</div>
        <div className='w-full px-4 py-15 border-b border-gray-400'>Dummy Item 5</div>
      </div>
      <footer className='w-screen text-center p-5'>&copy;2026 Jason Fernandez. All rights reserved.</footer>
    </div>
  )
}

export default App
