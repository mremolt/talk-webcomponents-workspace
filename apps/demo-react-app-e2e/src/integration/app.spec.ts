import { getGreeting } from '../support/app.po';

describe('demo-react-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to demo-react-app!');
  });
});
