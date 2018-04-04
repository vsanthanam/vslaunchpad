import React from 'react';
import ReactDOM from 'react-dom';
import FooterBar from './FooterBar';

var executed = false;

const div = document.createElement('div');
const handler = () => {

  executed = true;

};
const footerBar = <FooterBar handleOnClick={handler} />;

it('renders without crashing', () => {

  ReactDOM.render(footerBar, div);
  ReactDOM.unmountComponentAtNode(div);

});

it('has the correct hander', () => {

  expect(footerBar.props.handleOnClick).toEqual(handler);

});

it('gets handled on click', () => {

  footerBar.props.handleOnClick();
  expect(executed).toEqual(true);

});
