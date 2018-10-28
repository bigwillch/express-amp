var React = require('react');
import Html from './Html';

const Content = (props) => {
  console.log(props)
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
