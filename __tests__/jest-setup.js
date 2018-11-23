import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Response } from 'whatwg-fetch';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// global.window.devToolsExtension = jest.fn();
global.Response = Response;
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
// global.fetch = require('jest-fetch-mock');
