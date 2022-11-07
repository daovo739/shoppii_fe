import PropTypes from 'prop-types'
import { Tabs, Tab, Typography, Box } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import OrderHistoryItem from '../OrderHistoryItem'

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
                    <Typography>{children}</Typography>
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

export default function OrderHistoryTab({ accepted, rejected, pending }) {
    const [value, setValue] = useState(0)

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
                    <Tab
                        label={
                            <span style={{ fontSize: '1.3rem' }}>
                                Đang xử lý
                            </span>
                        }
                        {...a11yProps(0)}
                    />
                    <Tab
                        label={
                            <span style={{ fontSize: '1.3rem' }}>Đã giao</span>
                        }
                        {...a11yProps(1)}
                    />
                    <Tab
                        label={
                            <span style={{ fontSize: '1.3rem' }}>Đã hủy</span>
                        }
                        {...a11yProps(2)}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {pending?.map((order, index) => (
                    <OrderHistoryItem key={index} order={order} />
                ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {accepted?.map((order, index) => (
                    <OrderHistoryItem key={index} order={order} />
                ))}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {rejected?.map((order, index) => (
                    <OrderHistoryItem key={index} order={order} />
                ))}
            </TabPanel>
        </Box>
    )
}
