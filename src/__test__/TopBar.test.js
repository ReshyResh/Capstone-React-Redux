import React from 'react';
import renderer from 'react-test-renderer';
import TopBar from '../components/TopBar';
import store from '../redux/store';
import { Provider } from 'react-redux'

it('Top part renders correctly', () => {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", 'top-bar');
  document.body.appendChild(newDiv);
  const tree = renderer
    .create(<Provider store = { store }><TopBar /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});