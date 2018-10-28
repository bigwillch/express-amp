const React = require('react');
import Content from 'Hocs/Content';

const Article = (props) => {

  return (
    <article>
      {props.fields.body}
    </article>
  );
}

export default Content(Article);