const React = require('react');
import { Content } from 'Hocs';

const Article = ({fields, image}) => {

  return (
    <article>
      <amp-img src={`${image.src}?w=600`}
        width={image.width}
        height={image.height}
        layout="responsive"
        alt="AMP"></amp-img>
      {fields.body}
    </article>
  );
}

export default Content(Article);