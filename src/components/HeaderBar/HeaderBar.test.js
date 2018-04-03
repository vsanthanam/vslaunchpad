import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './HeaderBar';

const div = document.createElement('div');
const headerBar = <HeaderBar title="title" subtitle="subtitle" />;

it('renders without crashing', () => {

  ReactDOM.render(headerBar, div);
  ReactDOM.unmountComponentAtNode(div);

});

it('has the correct title', () => {

  expect(headerBar.props.title).toEqual('title');

})

it('has the correct subtitle', () => {

  expect(headerBar.props.subtitle).toEqual('subtitle');

});
