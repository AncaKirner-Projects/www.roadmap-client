import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// global.fetch = require('jest-fetch-mock')
global.window.devToolsExtension = jest.fn();
