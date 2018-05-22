import React from 'react'
import { NavLink } from './navLink';

export const Navigation = () => (
    <div className='nav'>
        <div className='heading'>
            <i className="fas fa-tags"></i>
            <span>Tags</span>
        </div>
        <div className='links'>
            <NavLink type='new' text='New' />
            <NavLink type='types' text='Types' />
        </div>
    </div>
)