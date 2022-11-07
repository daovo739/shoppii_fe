import React from 'react'
import FilterPart from '../FilterPart'
import './index.css'
import FilterAltIcon from '@mui/icons-material/FilterAltOutlined'
import Button from '@mui/material/Button'

function FilterSidebar({ filtersMap, setFilters, filters, getProducts }) {
    const listFilterTitle = [
        {
            title: 'Theo thể loại',
            name: 'categoryId',
            element: filtersMap?.categories?.map(category => {
                return {
                    id: category.category_id,
                    value: category.category_name,
                    getValueById: true,
                }
            }),
        },
        {
            title: 'Theo nơi bán',
            name: 'location',
            element: filtersMap?.locations?.map(location => {
                return {
                    id: location.shopId,
                    value: location.address,
                }
            }),
        },
    ]
    return (
        <div className="filter-sidebar">
            <div className="filter-title">
                <div className="title-icon">
                    <FilterAltIcon fontSize="large"></FilterAltIcon>
                </div>
                <div className="title-body mt-1">BỘ LỌC TÌM KIẾM</div>
            </div>
            <div className="filter-body">
                {listFilterTitle?.map((item, index) => (
                    <FilterPart
                        key={index}
                        elements={item}
                        setFilters={setFilters}
                        filters={filters}
                    ></FilterPart>
                ))}

                <div className="price-range">
                    <h4>Khoảng giá</h4>
                    <div className="range d-flex align-content-center mt-5 mb-5 justify-content-between ">
                        <input
                            className="input-price w-100"
                            type="number"
                            min="1"
                            placeholder="₫ Từ"
                            name="startPrice"
                            onChange={e =>
                                setFilters(prev => {
                                    return {
                                        ...prev,
                                        startPrice: e.target.value,
                                    }
                                })
                            }
                        />
                        <p>-</p>
                        <input
                            className="input-price w-100"
                            type="number"
                            min="1"
                            name="endPrice"
                            placeholder="₫ Đến"
                            onChange={e =>
                                setFilters(prev => {
                                    return { ...prev, endPrice: e.target.value }
                                })
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar
