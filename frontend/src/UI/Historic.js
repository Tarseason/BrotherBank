function Historic(props) {
  const { favor } = props;
  return (
    <div className="contentCard">
      <div className="favorContent">
        <div className="favorInfo">
          <h3>Titulo</h3>
          <p>{favor.description}</p>
        </div>
        <div className="cardIdentifier">
          <div className="view">
            <img
              style={{ width: "40px" }}
              src="https://static.vecteezy.com/ti/vetor-gratis/p3/566937-icone-de-pessoa-gratis-vetor.jpg"
              alt="avatar user"
            />
          </div>
          <div className="action">
            <div className="amount">{favor.amountOffered}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historic;
