import { UnwirePage } from './app.po';

describe('unwire App', () => {
  let page: UnwirePage;

  beforeEach(() => {
    page = new UnwirePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
