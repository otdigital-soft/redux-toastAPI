import React from 'react';
import renderer from 'react-test-renderer';
import Todo from '../Todo';

describe('Test Todo Component', () => {
    it('should render without error', () => {
    const props = {
        text: 'title',
        _id: 'Author',
        clickDelete: () => {}
    }
    const component = renderer.create(<Todo {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    });
});
