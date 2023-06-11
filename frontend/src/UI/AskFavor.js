function AskFavor() {
  const submitHandle = (event) => {
    console.log(event.target.value);
  };
  return (
    <form onSubmit={submitHandle}>
      <label htmlFor="requestedFavor">Para quem</label>
      <input id="requestedFavor" type="text" />
      <label htmlFor="amountOffered">Quantia</label>
      <input id="amountOffered" type="text" />
      <label htmlFor="description"></label>
      <input id="description" type="text" />
      <label htmlFor="typeFavor">Global ou privado</label>
      <input id="typeFavor" type="text" />
      <button type="submit">Pedir</button>
    </form>
  );
}

export default AskFavor;
