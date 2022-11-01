import { useState } from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab, Typography, Box } from '@mui/material'
import Unregistered from '../Unregistered'
import RegisterShopForm from '../RegisterShopForm'
import SentRequests from '../SentRequests'

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

function RegisterShopTab(props) {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const [isClickBtn, setIsClickBtn] = useState(false)

    const getIsClick = value => {
        setIsClickBtn(value)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab
                        className="fs-5"
                        label="Đăng ký cửa hàng"
                        {...a11yProps(0)}
                    />
                    <Tab
                        className="fs-5"
                        label="Các yêu cầu đã gửi"
                        {...a11yProps(1)}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div
                    className="w-80 d-flex justify-content-center align-items-center py-5"
                    style={{
                        border: '1px dashed gray',
                        minHeight: '40rem',
                        backgroundColor: 'white',
                    }}
                >
                    {!isClickBtn ? (
                        <Unregistered onClick={getIsClick} />
                    ) : (
                        <RegisterShopForm />
                    )}
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SentRequests/>
            </TabPanel>
        </Box>
    )
}

export default RegisterShopTab
