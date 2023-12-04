"use client"
import { Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'
import { MenuItem } from 'react-pro-sidebar';

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {

    return (
        <Link className="" href={to}>
            <MenuItem
                active={selected === title}
                onClick={() => setSelected(title)}
                icon={icon}
            >
                <Typography className={`${isCollapsed ? "hidden" : "inline "} ml-5 `}>{title}</Typography>
            </MenuItem>
        </Link>
    );
};

function SideNav({ sideNavContent }) {
    const [selected, setSelected] = useState("Detail");
    return (
        <div className='col-span-1'>
            
            {sideNavContent.map((e, index) => {
               return  <Item title={e.name} isCollapsed={false} icon={e.icon} selected={selected} setSelected={setSelected} to={e.to} key={index} />
            })}
        </div>
    )
}

export default SideNav