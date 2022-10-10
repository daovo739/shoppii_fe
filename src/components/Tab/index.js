import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ProductCard from '../../pages/user/Products/components/ProductCard'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Row, Col } from 'react-bootstrap'
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
                <Container fluid="md">
                    <Row>
                        <Col md={12}>
                            
                        </Col>
                    </Row>
                    <Row>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                            <Col md={3} key={item} className="pb-4">
                                <ProductCard />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col md={12} className="d-flex justify-content-center py-5">
                            <Stack spacing={2}>
                                <Pagination size="large" count={10} color="primary" />
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Box>
    )
}

export default BasicTabs
