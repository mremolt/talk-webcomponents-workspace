import { HelloElement } from './hello.element';

describe('HelloElement', () => {
  let subject: HelloElement;

  beforeEach(() => {
    subject = new HelloElement();
  });

  it('should instantiate', () => {
    expect(subject).toBeDefined();
  });

  describe('render', () => {
    beforeEach(() => {
      subject.connectedCallback();
    });

    it('should return the who attribute', () => {
      expect(subject.shadowRoot.querySelector('span').innerText).toEqual(
        'unknown'
      );
    });

    it('should return the changed who attribute', async () => {
      subject.who = 'Arthur';
      await subject.requestUpdate();

      expect(subject.shadowRoot.querySelector('span').innerText).toEqual(
        'Arthur'
      );
    });
  });

  describe('onClick', () => {
    let spyDispatchEvent: jest.SpyInstance;

    beforeEach(() => {
      jest.resetAllMocks();
      spyDispatchEvent = jest.spyOn(subject, 'dispatchEvent');

      subject.onClick();
    });

    it('should dispatch my-event', () => {
      expect(subject.dispatchEvent).toHaveBeenCalled();
    });

    it('should dispatch my-event with right Event', () => {
      const paramEvent: CustomEvent = spyDispatchEvent.mock.calls[0][0];

      expect(paramEvent).toBeInstanceOf(CustomEvent);
      expect(paramEvent.detail).toEqual({
        message: 'Something important happened',
        num: 0
      });
    });
  });
});
