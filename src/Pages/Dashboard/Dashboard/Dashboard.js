import  React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../../Admin/MakeAdmin/MakeAdmin';
import AddItem from '../../Admin/AddItem/AddItem';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/"><Button color="inherit">Home</Button></Link>
            <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            {admin && <Box>
                <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/addItem`}><Button color="inherit">Add Item</Button></Link>
            </Box>}
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/:makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/:addItem`}>
                        <AddItem></AddItem>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;






















// import React from 'react';
// import useAuth from '../../../Hooks/useAuth';
// import MyOrder from '../My Order/MyOrder';
// import './Dashboard.css'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useParams,
//     useRouteMatch
//   } from "react-router-dom";
// import DashboardHome from '../DashboardHome/DashboardHome';
// import MakeAdmin from '../../Admin/MakeAdmin/MakeAdmin';

// const Dashboard = () => {
//     const {user, logOut} = useAuth();
//     let { path, url } = useRouteMatch();
    
//     return (
//         <div className='container-fluid p-0'>
//             <div className='row'>
//             <div className='col-12 col-md-3 bg-info my-dashboard p-0 border-0 accordion-item'>
//                 <ul type='none'>
//                     <li><Link to='/services'>Services</Link></li>
//                     <li><Link to={`${url}`}>Dashboard</Link></li>
//                     <li><Link to={`${url}/makeAdmin`}>Make Admin</Link></li>
//                     <li><Link to={`${url}/addService`}>Add item</Link></li>
//                 </ul>
//                 <h2>Dashboard</h2>
//                 <h6>{user.displayName}</h6>
//                 <h2 className="accordion-header" id="headingOne">
//                     <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                         My Order
//                     </button>
//                 </h2>
//                 <h2 className="accordion-header" id="headingTwo">
//                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                         Review
//                     </button>
//                 </h2>
//                 <h2 className="accordion-header" id="headingThree">
//                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                         Payment
//                     </button>
//                 </h2>
//                 <Link className="nav-link text-white" onClick={logOut} to="/home">Log Out</Link>
//             </div>
//             <Switch>
//                 <Route exact path={path}>
//                     <DashboardHome></DashboardHome>
//                 </Route>
//                 <Route path={`${path}/makeAdmin`}>
//                     <MakeAdmin></MakeAdmin>
//                 </Route>
//             </Switch>
//             <div className="col-12 col-md-8 p-0 accordion" id="accordionExample">
//                 {/* <div className="col-12 col-md-3 p-0 ">

//                 </div> */}
//                 <div className="p-0">
//                     <div>
//                     <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                         <div className="accordion-body p-0">
//                             <MyOrder></MyOrder>
//                         </div>
//                     </div>
//                     </div >
//                     <div>
//                         <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//                             <div className="accordion-body p-0">
//                                 <MyOrder></MyOrder>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//                             <div className="accordion-body px-0 my-5 pt-5">
//                                 <h3>Payment methood will be comming soon....</h3>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;