import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

var executed = false;

const div = document.createElement('div');
const handle = () => {
  executed = true;
};

const searchBar = <SearchBar inputid="search" handleKeyUp={handle}/>;

it('renders without crashing', () => {

  ReactDOM.render(searchBar, div);
  ReactDOM.unmountComponentAtNode(div);

});


it('has the right id', () => {

  expect(searchBar.props.inputid).toEqual('search');

});

it('has the right handler', () => {

  expect(searchBar.props.handleKeyUp).toEqual(handle);

});

it('has a functioning handler', () => {

  searchBar.props.handleKeyUp();

  expect(executed).toEqual(true);

});
