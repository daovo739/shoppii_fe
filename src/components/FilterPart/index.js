import React, { useState, useEffect } from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'

import { List, Collapse } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import './index.css'

function FilterPart({ elements, setFilters, filters }) {
    const { title, element, name } = elements

    const firstItems = element.slice(0, 4)
    const remain = element.slice(4)
    const [checked, setChecked] = useState([...filters[name]])
    // const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        setChecked([...filters[name]])
    }, [filters])

    const handleToggle = ele => () => {
        // if (checked.includes(ele.id)) {
        //     const newChecked = checked.filter(item => item !== ele.id)
        //     setChecked(newChecked)
        // } else {
        //     setChecked([...checked, ele.id])
        // }

        if (ele.getValueById) {
            setFilters(prev => {
                if (prev[name].includes(ele.id)) {
                    const newChecked = prev[name].filter(
                        item => item !== ele.id,
                    )
                    return { ...prev, [name]: newChecked }
                }
                return {
                    ...prev,
                    [name]: [...prev[name], ele.id],
                }
            })
        } else {
            setFilters(prev => {
                if (prev[name].includes(ele.value)) {
                    const newChecked = prev[name].filter(
                        item => item !== ele.value,
                    )
                    return { ...prev, [name]: newChecked }
                }
                return {
                    ...prev,
                    [name]: [...prev[name], ele.value],
                }
            })
        }
    }

    return (
        <div className="filter-part">
            <h4>{title}</h4>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {/* first Item */}
                {firstItems.map(ele => {
                    const labelId = `checkbox-list-label-${name}`
                    const { id, value } = ele
                    return (
                        <ListItem key={id} disablePadding>
                            <ListItemButton
                                role={undefined}
                                onClick={handleToggle(ele)}
                                name={name}
                                dense
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        checked={
                                            ele.getValueById
                                                ? checked.indexOf(ele.id) !== -1
                                                : checked.indexOf(ele.value) !==
                                                  -1
                                        }
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{
                                            'aria-labelledby': labelId,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    className="fs-1"
                                    id={labelId}
                                    primary={value}
                                />
                            </ListItemButton>
                        </ListItem>
                    )
                })}

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {remain.map(ele => {
                            const labelId = `checkbox-list-label-${name}`
                            const { id, value } = ele
                            return (
                                <ListItem key={id} disablePadding>
                                    <ListItemButton
                                        role={undefined}
                                        onClick={handleToggle(ele)}
                                        name={name}
                                        dense
                                    >
                                        <ListItemIcon>
                                            <Checkbox
                                                checked={
                                                    ele.getValueById
                                                        ? checked.indexOf(
                                                              ele.id,
                                                          ) !== -1
                                                        : checked.indexOf(
                                                              ele.value,
                                                          ) !== -1
                                                }
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            className="fs-1"
                                            id={labelId}
                                            primary={value}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Collapse>
                <ListItem>
                    <ListItemButton onClick={handleClick}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}

export default FilterPart
