export default function Search({ filterFood }) {

    return (
        <div onSubmit={ e => e.preventDefault() }>
            <input type="text" className="input search-bar" name="search" placeholder="Search" onChange={ e => filterFood(e.target.value) }></input>
        </div>
    )
}