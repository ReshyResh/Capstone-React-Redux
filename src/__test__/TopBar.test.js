import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TopBar from '../components/TopBar';
import store from '../redux/store';

it('Top part renders correctly', () => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'top-bar');
  document.body.appendChild(newDiv);
  const tree = renderer
    .create(<Provider store={store}><TopBar /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
