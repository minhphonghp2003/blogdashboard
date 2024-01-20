import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export let User = [
    {
        title: "Profile",
        to: "/dashboard/user/profile",
        icon: <PersonOutlinedIcon />,
    },
    {
        title: "Works",
        to: "/dashboard/user/works",
        icon: <BarChartOutlinedIcon />,
    },
    {
        title: "All users",
        to: "/dashboard/user/all",
        icon: <PeopleOutlinedIcon />,
    },
];

export let New = [
    {
        title: "Post",
        to: "/dashboard/new/post",
        icon: <CalendarTodayOutlinedIcon />,
    },
    {
        title: "Post information",
        to: "/dashboard/new/topic",
        icon: <ReceiptOutlinedIcon />,
    },
];
