function Card(props) {
  return (
    <div className={`${props.className || undefined}`}>{props.children}</div>
  );
}

export default Card;
