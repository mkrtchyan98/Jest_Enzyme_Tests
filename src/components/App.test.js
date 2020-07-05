import React from 'react';
import { shallow,mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import App from './App'
import Hotels from './Hotels/Hotels';




describe('<App />',() => {
	test('renders snapshot',() => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	})
	it('valid path should not redirect to 404',() => {
		const wrapper = mount (
			 <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
             <App/>
    		 </MemoryRouter>
    		 )
    expect(wrapper.find(Hotels)).toHaveLength(1);
	});

})