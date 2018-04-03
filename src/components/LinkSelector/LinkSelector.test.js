import React from 'react';
import ReactDOM from 'react-dom';
import LinkSelector from './LinkSelector';

const div = document.createElement('div');
const normalSelector = <LinkSelector name='normal' emphasized={false} />
const emphasizedSelector = <LinkSelector name='emphasized' emphasized={true} />

it('renders without crashing', () => {

  ReactDOM.render(normalSelector, div);
  ReactDOM.unmountComponentAtNode(div);

});

it('renders when emphasized without crashing', () => {

  ReactDOM.render(emphasizedSelector, div);
  ReactDOM.unmountComponentAtNode(div);

});

it('it has the right name', () => {

  expect(normalSelector.props.name).toEqual('normal');

});

it('it has the right name when emphasized', () => {

  expect(emphasizedSelector.props.name).toEqual('emphasized');

});

it('it has the right emphasis status', () => {

  expect(normalSelector.props.emphasized).toEqual(false);

});

it('it has the right emphasis status when emphasized', () => {

  expect(emphasizedSelector.props.emphasized).toEqual(true);

});
