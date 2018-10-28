const React = require('react');
import { Content } from 'Hocs';
import { Card } from 'Atoms/Molecules';

const ArticleList = (props) => {

  const items = props.items.map((item, i) => (
    <li
      key={i}
      id={`amp-live-list-latest-articles-${i}`}
      data-sort-time={i+1}
    >
      <Card
        title={item.fields.title}
        href={`/articles/${item.fields.slug}`}
      />
    </li>
  ))

  return (
    <React.Fragment>
      <h2>Latest Articles</h2>

      <amp-live-list layout="container"
        data-poll-interval="15000"
        data-max-items-per-page="5"
        id="amp-live-list-latest-articles">
        <button 
          update="true"
          on="tap:amp-live-list-latest-articles.update"
          className="ampstart-btn ml1 caps">You have updates</button>
        <ul items="true">
          { items }
        </ul>
      </amp-live-list>

    </React.Fragment>
  );
}

export default Content(ArticleList);