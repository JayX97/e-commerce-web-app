const SearchBar = () => {
  return (
    <form id='search-form' className='flex w-screen mx-auto justify-between'>
      <input type='text' id='search-bar' className='bg-white w-full px-2 py-[0.20rem] border border-r-0 border-black rounded-l-lg' />
      <button type='submit' className='bg-gray-200 border border-black rounded-r-lg'>Search</button>
    </form>
  )
}

export default SearchBar;