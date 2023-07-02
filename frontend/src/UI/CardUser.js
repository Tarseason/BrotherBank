function CardUser({ info }) {
  return (
    <>
      {info && (
        <div>
          <p>{info.userName}</p>
          <p>{info.email}</p>
        </div>
      )}
      {info.message && (
        <div>
          <p>{info.message}</p>
        </div>
      )}
    </>
  );
}

export default CardUser;
