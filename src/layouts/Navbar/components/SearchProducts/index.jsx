import { useState } from 'react'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { get } from '../../../../utils/httprequest'
import { handleChange } from '../../../../utils/handleForm'
import queryString from 'query-string'
import useStore from '../../../../store/hooks'

function SearchProducts() {
    const navigate = useNavigate()
    const { setProductsData } = useStore()
    const [search, setSearch] = useState({ keyword: '' })

    const handleSearch = async e => {
        console.log(search)
        e.preventDefault()
        const query = queryString.stringify(search)
        const res = await get(`products`, query)
        const data = await res.json()
        const keyword = search.keyword
        setSearch({ keyword: '' })
        setProductsData(data)
        navigate(`/products`, {
            state: { keyword },
        })
    }

    return (
        <form className="header-search" onSubmit={handleSearch}>
            <input
                value={search.keyword}
                type="text"
                name="keyword"
                placeholder="Tìm kiếm sản phẩm"
                onChange={e => handleChange(e, setSearch)}
            />
            <button>
                <Search className="text-white" fontSize="large" type="submit" />
            </button>
        </form>
    )
}

export default SearchProducts
