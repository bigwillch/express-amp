const React = require('react');

const Card = (props) => {

  return (
    <a 
      className="card"
      href={props.href}
    >
      <h3>{props.title}</h3>
    </a>
  );
}

export default Card;