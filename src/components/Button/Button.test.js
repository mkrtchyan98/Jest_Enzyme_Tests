import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {

	it('should render the correct children', () => {
		const children = 'This is a button';
		const component = shallow(<Button>{children}</Button>)

		expect(component.props().children).toEqual(children)	
	});

	it('should handle the onClick event', () => {
		const mockOnclick = jest.fn();
		const component = shallow(<Button onClick={mockOnclick} />);

		component.simulate('click');

		expect(mockOnclick).toHaveBeenCalled();
	})
})

})
