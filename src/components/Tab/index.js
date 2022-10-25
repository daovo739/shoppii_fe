import * as React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab, Typography, Box } from '@mui/material'
import ProductTab from '../../pages/user/Products/components/ProductTab'
import ShopTab from '../../pages/user/Products/components/ShopTab'
import './index.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

function BasicTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab className="fs-5" label="Sản phẩm" {...a11yProps(0)} />
                    <Tab className="fs-5" label="Cửa hàng" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ProductTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ShopTab />
            </TabPanel>
        </Box>
    )
}

export default BasicTabs
