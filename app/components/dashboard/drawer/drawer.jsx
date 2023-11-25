'use client'
import { New, User } from "./menuData"
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Link from 'next/link'
import Image from "next/image";
import { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";



const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {

  return (
    <Link className="" href={to}>
      <MenuItem
        active={selected === title}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography className={`${isCollapsed ? "hidden" : "inline"} ml-5 `}>{title}</Typography>
      </MenuItem>
    </Link>
  );
};


function Drawer() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const handleOnHover = () => {
    setIsCollapsed(false)
  }
  const handleNotOnHover = () => {
    setIsCollapsed(true)
  }
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          height: "100vh",
          background: `#2b2c40 !important`,
          padding: "1rem",
          boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.25)",
          width:"6rem",
          transitionProperty:"width",
          transitionDuration:".3s"
        },
        "& .pro-sidebar-inner:hover": {
          width:"15rem"
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
          color: "#a3a4cc",
          fontWeight: "400",
        },
        "& .pro-inner-item:hover": {
          backgroundColor: "rgba(124,125,182,.06)",
          borderRadius: "0.375rem",
        },
      }}
    >
      <ProSidebar className="" collapsed={isCollapsed} onMouseEnter={handleOnHover} onMouseLeave={handleNotOnHover}>
        <Menu iconShape="square" >
          <Image
            src="/logo.svg"
            alt="logo"
            width="35"
            height="200"
            className="mb-5"
          />
          <Box >
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Typography
              marginTop="1rem"
              color="#7071a4"
              fontSize="15px"
            >
              New
            </Typography>
            {New.map((u, index) => {
              return <Item
                icon={u.icon}
                isCollapsed={isCollapsed}
                selected={selected}
                setSelected={setSelected}
                title={u.title}
                to={u.to}
                key={index}
              />
            })}
            <Typography
              marginTop="1rem"
              color="#7071a4"
              fontSize="15px"
            >
              User
            </Typography>
            {User.map((u, index) => {
              return <Item
                icon={u.icon}
                isCollapsed={isCollapsed}
                selected={selected}
                setSelected={setSelected}
                title={u.title}
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

export default Drawer