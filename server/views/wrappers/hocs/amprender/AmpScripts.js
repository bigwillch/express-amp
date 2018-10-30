var React = require('react');

const AmpScripts = (props) => {

  const scripts = Object.keys(props.components).map(
    (script, i) => (
      <script key={i} async custom-element={script} src={`https://cdn.ampproject.org/v0/${script}-0.1.js`}></script>
    )
  )

  return (
    <React.Fragment>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      {scripts}
    </React.Fragment>
  )
}

AmpScripts.defaultProps = {
  components: {}
}

export default AmpScripts