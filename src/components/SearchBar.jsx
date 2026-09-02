
const SearchBar = () => {
  return (
    <div className="mt-2.5 border p-2.5 m-2.5 rounded-2xl">
    <form onSubmit={handleSubmit} className="text-center">
        <input type="text" placeholder="Enter City" className="p-1.5 rounded-2xl outline" ></input>
        <button type="submit" className="bg-blue-500   text-white p-1.5 rounded-2xl ml-0.5">Search City</button>
    </form>
    </div>
  )
}

export default SearchBar