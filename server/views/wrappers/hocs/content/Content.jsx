var React = require('react');
import { Html } from 'Hocs';

const Content = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>{props.title}</h1>
      </header>
      <main>
        {props.children}
      </main>
    </React.Fragment>
  );
}

export default (WrappedComponent) => Html(
  (props) => (
    <Content {...props}>
      <WrappedComponent {...props} />
    </Content>
  )
)
