import React from 'react';
import Game from './game';
import { shallow } from 'enzyme';

it('render without issues', () => {
    shallow(<Game/>);
});