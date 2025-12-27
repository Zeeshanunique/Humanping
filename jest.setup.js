// Mock Expo runtime
global.__ExpoImportMetaRegistry = {
  register: jest.fn(),
};

global.fetch = jest.fn();
