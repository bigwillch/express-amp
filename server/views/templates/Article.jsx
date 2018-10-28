const React = require('react');
import Content from '../Content';

const Article = (props) => {

  return (
    <article>
      {props.fields.body}
    </article>
  );
}

export default Content(Article);