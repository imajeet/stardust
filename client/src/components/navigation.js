import React from 'react'
import { NavLink } from './navLink';

export const Navigation = ({openModal, resetForm}) => (
    <div className='nav'>
        <div className='heading'>
            <i className="fas fa-tags"></i>
            <span>Tags</span>
        </div>
        <div className='links'>
            <NavLink openModal={openModal} resetForm={resetForm} type='new' text='New' />
            <NavLink type='types' text='Types' />
        </div>
    </div>
)