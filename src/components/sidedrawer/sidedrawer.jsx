import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Light } from "@mui/icons-material";
import "./sidedrawer.css";
import Map from "../Map";
import ChartC from "../Chart";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  marginTop: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 0,
    width: `calc(100% - ${0}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [color, setcolor] = React.useState("Light");

  const handleChange = (event) => {
    setcolor(event.target.value);
  };

  const handleDrawer = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            color: " #222b45",
            boxShadow: "0 0.5rem 1rem 0 rgb(44 51 73 / 10%)",
            height: " 4.7rem",
            backgroundColor: " #fff",
            padding: "1.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              sx={{
                paddingRight: "1.25rem",
                borderRight: "1px solid #edf1f7",
                borderRadius: "0px",
                height: "20px",
                marginRight: "1.25rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="eva eva-menu-2-outline"
                fill="#8f9bb3"
              >
                <g data-name="Layer 2">
                  <g data-name="menu-2">
                    <rect
                      width="24px"
                      height="24px"
                      transform="rotate(180 12 12)"
                      opacity="0"
                    ></rect>
                    <circle cx="4" cy="12" r="1"></circle>
                    <rect
                      x="7"
                      y="11"
                      width="14"
                      height="2"
                      rx=".94"
                      ry=".94"
                    ></rect>
                    <rect
                      x="3"
                      y="16"
                      width="18"
                      height="2"
                      rx=".94"
                      ry=".94"
                    ></rect>
                    <rect
                      x="3"
                      y="6"
                      width="18"
                      height="2"
                      rx=".94"
                      ry=".94"
                    ></rect>
                  </g>
                </g>
              </svg>
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              sx={{ fontSize: "28px", paddingRight: "1.25rem" }}
              component="div"
            >
              CourierOne
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 96, height: "40px" }}>
              <Select
                sx={{ width: 96, height: "40px" }}
                value={color}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                defaultValue={Light}
              >
                <MenuItem value={"Light"}>Light</MenuItem>
                <MenuItem value={"Dark"}>Dark</MenuItem>
                <MenuItem value={"Cosmic"}>Cosmic</MenuItem>
                <MenuItem value={"Corporate"}>Corporate</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ paddingRight: "1.25rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              class="eva eva-power-outline"
              fill="#8f9bb3"
            >
              <g data-name="Layer 2">
                <g data-name="power">
                  <rect width="24" height="24" opacity="0"></rect>
                  <path d="M12 13a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1z"></path>
                  <path d="M16.59 3.11a1 1 0 0 0-.92 1.78 8 8 0 1 1-7.34 0 1 1 0 1 0-.92-1.78 10 10 0 1 0 9.18 0z"></path>
                </g>
              </g>
            </svg>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>

        <List>
          {[
            "Dashboard",
            "User",
            "Categories",
            "Banners",
            "Coupons",
            "Delivery Modes",
            "Delivery Profile",
            "Vendors",
            "Orders",
            "Transactions",
            "Payment Methods",
            "Faqs",
            "Support",
            "Setting",
          ].map((text, index) => (
            <ListItem
              button
              key={text}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "13px",
                borderBottom: "1px solid #edf1f7",
              }}
            >
              <div style={{ display: "flex" }}>
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    paddingRight: ".7rem",
                    alignItems: "center",
                  }}
                >
                  {index === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      class="eva eva-activity-outline"
                      fill="#598bff"
                    >
                      <g data-name="Layer 2">
                        <g data-name="activity">
                          <rect
                            width="24"
                            height="24"
                            transform="rotate(90 12 12)"
                            opacity="0"
                          ></rect>
                          <path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20z"></path>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    ""
                  )}
                  {index === 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      class="eva eva-person-outline"
                      fill="#8f9bb3"
                    >
                      <g data-name="Layer 2">
                        <g data-name="person">
                          <rect width="24" height="24" opacity="0"></rect>
                          <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path>
                          <path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"></path>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    ""
                  )}
                  {index > 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      class="eva eva-list-outline"
                      fill="#8f9bb3"
                    >
                      <g data-name="Layer 2">
                        <g data-name="list">
                          <rect
                            width="24"
                            height="24"
                            transform="rotate(180 12 12)"
                            opacity="0"
                          ></rect>
                          <circle cx="4" cy="7" r="1"></circle>
                          <circle cx="4" cy="12" r="1"></circle>
                          <circle cx="4" cy="17" r="1"></circle>
                          <rect
                            x="7"
                            y="11"
                            width="14"
                            height="2"
                            rx=".94"
                            ry=".94"
                          ></rect>
                          <rect
                            x="7"
                            y="16"
                            width="14"
                            height="2"
                            rx=".94"
                            ry=".94"
                          ></rect>
                          <rect
                            x="7"
                            y="6"
                            width="14"
                            height="2"
                            rx=".94"
                            ry=".94"
                          ></rect>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    ""
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <ListItemIcon sx={{ minWidth: "20px" }}>
                  {index === 0 ? (
                    " "
                  ) : (
                    <ChevronLeftIcon
                      style={{ fontSize: "20px", color: "#8f9bb3" }}
                    />
                  )}
                </ListItemIcon>
              </div>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: " 2.25rem 2.25rem 0.75rem ",
        }}
      >
        <DrawerHeader />

        <div className="activeorder">
          <div className="header">Active orders</div>
          <Map />
        </div>
        <div className="orders">
          <div className="header">ORDERS</div>
          <div className="month">
            <div>
              <div className="info"> Total </div>
              <div className="text"> 6</div>
            </div>
            <div>
              <div className="info"> Last Month </div>
              <div className="text"> 6</div>
            </div>
            <div>
              <div className="info"> Last Week </div>
              <div className="text"> 2</div>
            </div>
            <div>
              <div className="info"> Today </div>
              <div className="text"> 0</div>
            </div>
          </div>
          <div className="chartsection">
            <div className="chartmainsection">
              <div className="label0">
                {" "}
                <div className="label">
                  <div
                    className="color"
                    style={{ backgroundColor: "rgb(255, 170, 0)" }}
                  ></div>
                  <div className="text"> Complete</div>
                </div>
                <div className="label">
                  <div
                    className="color"
                    style={{ backgroundColor: "rgb(51, 102, 255)" }}
                  ></div>
                  <div className="text">Other</div>
                </div>
                <div className="label">
                  <div
                    className="color"
                    style={{ backgroundColor: "rgb(0, 215, 143)" }}
                  ></div>
                  <div className="text"> All</div>
                </div>
              </div>
              <div className="select">
                <FormControl sx={{ m: 1, minWidth: 96, height: "40px" }}>
                  <Select
                    sx={{ width: 96, height: "40px" }}
                    value={color}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "Without label" }}
                    defaultValue={Light}
                  >
                    <MenuItem value={"Light"} defaultValue>
                      Week
                    </MenuItem>
                    <MenuItem value={"Dark"}>Month</MenuItem>
                    <MenuItem value={"Cosmic"}>Year</MenuItem>
                    <MenuItem value={"Corporate"}>All</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="chart " style={{ height: "400px" }}>
              <ChartC />
            </div>
          </div>
        </div>
        <div className="activemain">
          <div className="simple">
            <div className="activity">
              <div className="text1">User Activity</div>
              <div className="select" style={{ marginBottom: "auto" }}>
                <FormControl sx={{ m: 1, minWidth: 96, height: "40px" }}>
                  <Select
                    sx={{ width: 96, height: "40px" }}
                    value={color}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "Without label" }}
                    defaultValue={Light}
                  >
                    <MenuItem value={"Light"} defaultValue>
                      Week
                    </MenuItem>
                    <MenuItem value={"Dark"}>Month</MenuItem>
                    <MenuItem value={"Cosmic"}>Year</MenuItem>
                    <MenuItem value={"Corporate"}>All</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="simplesub">
            <div className="innersub" style={{ textAlign: "left" }}>
              <div className="text011">Today's Revenue</div>
              <div className="h3">0</div>
              <div className="progressbar"></div>
              <div className="caption">No change since yesterday</div>
              <div className="text011 m3">Today's Order</div>
              <div className="h3">0</div>
              <div className="progressbar"></div>
              <div className="caption">No change since yesterday</div>
              <div className="text011 m3">Today's Distance</div>
              <div className="h3">0</div>
              <div className="progressbar"></div>
              <div className="caption">No change since yesterday</div>
            </div>
          </div>
        </div>
        <div className="orders">
          <div className="header">USERS</div>
          <div className="month">
            <div>
              <div className="info"> Total </div>
              <div className="text"> 26</div>
            </div>
            <div>
              <div className="info"> Last Month </div>
              <div className="text"> 10</div>
            </div>
            <div>
              <div className="info"> Last Week </div>
              <div className="text"> 0</div>
            </div>
            <div>
              <div className="info"> Today </div>
              <div className="text"> 0</div>
            </div>
          </div>
          <div className="chartsection">
            <div className="chartmainsection">
              <div className="label0">
                {" "}
                <div className="label">
                  <div
                    className="color"
                    style={{ backgroundColor: "rgb(0, 215, 143)" }}
                  ></div>
                  <div className="text"> New Registrations</div>
                </div>
              </div>
              <div className="select">
                <FormControl sx={{ m: 1, minWidth: 96, height: "40px" }}>
                  <Select
                    sx={{ width: 96, height: "40px" }}
                    value={color}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "Without label" }}
                    defaultValue={Light}
                  >
                    <MenuItem value={"Light"} defaultValue>
                      Week
                    </MenuItem>
                    <MenuItem value={"Dark"}>Month</MenuItem>
                    <MenuItem value={"Cosmic"}>Year</MenuItem>
                    <MenuItem value={"Corporate"}>All</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="chart " style={{ height: "400px" }}>
              <ChartC />
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
