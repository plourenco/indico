// This file is part of Indico.
// Copyright (C) 2002 - 2019 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Responsive} from 'semantic-ui-react';

import {Translate} from 'indico/react/i18n';
import MenuItem from './MenuItem';

import './Menu.module.scss';


const defaultLabels = {
    bookRoom: <Translate>Book a Room</Translate>,
    roomList: <Translate>List of Rooms</Translate>,
    calendar: <Translate>Bookings</Translate>,
};

const menuItems = [
    ['bookRoom', {
        path: '/book',
        icon: 'add square'
    }],
    ['roomList', {
        path: '/rooms',
        icon: 'list'
    }],
    ['calendar', {
        path: '/calendar',
        icon: 'calendar'
    }]
];

export default function Menu({labels}) {
    const finalLabels = {...defaultLabels, ...labels};
    return (
        <ul styleName="rb-menu">
            {menuItems.map(([key, {path, icon}]) => (
                <MenuItem key={key} path={path} namespace={key}>
                    <Icon name={icon} />
                    <Responsive as="span" minWidth={700}>
                        {finalLabels[key]}
                    </Responsive>
                </MenuItem>
            ))}
        </ul>
    );
}

Menu.propTypes = {
    labels: PropTypes.object
};

Menu.defaultProps = {
    labels: {}
};
