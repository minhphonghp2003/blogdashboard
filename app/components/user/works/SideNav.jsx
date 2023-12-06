"use client"
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'
import { MenuItem, Menu, ProSidebar } from 'react-pro-sidebar';

const Item = ({ title, to, setComponent, icon, selected, setSelected, isCollapsed }) => {
    return (
        <MenuItem
            active={selected === title}
            onClick={() => {
                setSelected(title)
                setComponent(to)
            }}
            icon={icon}
        >
            <Typography className={`${isCollapsed ? "hidden" : "inline "} ml-5 `}>{title}</Typography>
        </MenuItem>
    );
};

function SideNav({ setComponent, sideNavContent }) {

    const [selected, setSelected] = useState("Detail");
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    height: "100vh",
                    background: `inherit`,
                    width: "15rem",
                    
                },

                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-menu-item": {
                    borderRadius: "0.375rem",
                },

                "& .pro-menu-item.active": {
                    backgroundColor: "#696cff !important",
                },
                "& .pro-menu-item.active > *": {
                    color: "white"
                },
                "& .pro-inner-item": {
                    width: "full",
                    padding: "6px",
                    color: "white",
                    fontWeight: "400",
                },
                "& .pro-inner-item:hover": {
                    backgroundColor: "rgba(124,125,182,.06)",
                    borderRadius: "0.375rem",
                },
            }}
        >

            <ProSidebar className="" collapsed={false}>
                <Menu iconShape="square" >
                    <Box >
                        {sideNavContent.map((u, index) => {
                            return <Item
                                icon={u.icon}
                                setComponent={setComponent}
                                isCollapsed={false}
                                selected={selected}
                                setSelected={setSelected}
                                title={u.name}
                                to={u.to}
                                key={index}
                            />
                        })}

                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default SideNav