import { useState } from 'react'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { get } from '../../../../utils/httprequest'
import { handleChange } from '../../../../utils/handleForm'
import queryString from 'query-string'
function SearchProducts() {
    const navigate = useNavigate()
    const [search, setSearch] = useState({ keyword: '' })

    const handleSearch = async () => {
        console.log(search)
        const query = queryString.stringify(search)
        const res = await get(`products`, query)
        const data = await res.json()
        console.log(data)
        setSearch({ keyword: '' })
        navigate(`/products`, { state: { products: data } })
    }

    return (
        <div className="header-search">
            <input
                value={search.keyword}
                type="text"
                name="keyword"
                placeholder="Tìm kiếm sản phẩm"
                onChange={e => handleChange(e, setSearch)}
            />
            <button htmlFor="" onClick={handleSearch}>
                <Search className="text-white" fontSize="large" />
            </button>
        </div>
    )
}

export default SearchProducts
