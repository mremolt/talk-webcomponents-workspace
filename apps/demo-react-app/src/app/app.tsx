import React, { RefObject } from 'react';

import '@material/mwc-button';
import '@clear/ui-component-library';

import './app.scss';

export class App extends React.Component<{}, { person: string }> {
  public helloComponntRef: RefObject<any>;

  constructor(props) {
    super(props);

    this.state = { person: 'World' };
    this.helloComponntRef = React.createRef();
  }

  public componentDidMount(): void {
    this.helloComponntRef.current.addEventListener(
      'my-event',
      this.alertMe.bind(this)
    );

    setTimeout(() => {
      this.setState({ person: 'Arthur' });
    }, 2000);
  }

  public render() {
    return (
      <div>
        <header style={{ textAlign: 'center' }}>
          <h1>
            Welcome to <span>demo-react-app!</span>
          </h1>

          <uicom-hello
            who={this.state.person}
            onMyEvent={this.alertMe}
            ref={this.helloComponntRef}
          />

          <mwc-button unelevated="" label="Click me!" icon="check" />
        </header>
      </div>
    );
  }

  public alertMe(event) {
    console.log('alert!!!', event);
  }
}

export default App;
