import React from 'react';
import { shallow } from 'enzyme';
import SubHeader,{ Title,SubHeaderButton } from './SubHeader';


describe('<SubHeader />', () => {
	it('should render', () => {
		const component = shallow(<SubHeader />);

		expect(component).toMatchSnapshot();
	});

	it('should render with a dynamic title', () => {
		const title = 'Test Complate';
		const component = shallow(<SubHeader title={title}  />);

		expect(component.find(Title).text()).toEqual(title);
	});

	it('should render with  buttons and handle the onClick events',() => {
		const mockGoBack = jest.fn();
	    const mockOpenForm = jest.fn();

		const component = shallow(<SubHeader openForm={mockOpenForm}   goBack={mockGoBack}/>);

		const goBackButton = component.find(SubHeaderButton);
		const goBackButton = component.find(SubHeaderButton).at(0);
		expect(goBackButton.exists()).toBe(true);

		const mockOpenForm = component.find(SubHeaderButton);
		const mockOpenForm = component.find(SubHeaderButton).at(1);
		expect(mockOpenForm.exists()).toBe(true);

		goBackButton.simulate('click');
		expect(mockGoBack).toHaveBeenCalled();

		mockOpenForm.simulate('click');
		expect(mockOpenForm).toHaveBeenCalled();

	});
 
	})
