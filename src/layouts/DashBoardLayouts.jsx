import React from 'react';
import SideMenu from '../pages/shared/SideMenu/SideMenu';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex gap-10'>
            <SideMenu></SideMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;