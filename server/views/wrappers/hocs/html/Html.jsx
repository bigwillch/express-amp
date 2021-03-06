var React = require('react');

const Html = (props) => (
  <html amp="true">
    <head>
      <meta charSet="utf-8" />
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <title>{props.pageTitle}</title>
      <link rel="canonical" href="http://localhost/" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />

      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />

      <style amp-boilerplate="true">{'body{-webkit - animation: -amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility: visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility: visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility: visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility: visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility: visible}}'}</style>
      <noscript><style amp-boilerplate="true">{'body{-webkit - animation: none;-moz-animation:none;-ms-animation:none;animation:none}'}</style></noscript>
    </head>
    <body>{props.children}</body>
  </html>
)

export default (WrappedComponent) => {
  return (props) => (
    <Html {...props}>
      <WrappedComponent {...props}/>
    </Html>
  )
};
