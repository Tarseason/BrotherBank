import { Form } from "react-router-dom";

function FavorForm({ method, event }) {
  return (
    <Form method="post">
      <p>
        <label htmlFor="requestedFavorId">RequestedFavorId</label>
        <input
          id="requestedFavorId"
          type="text"
          name="requestedFavorId"
          required
          defaultValue={event ? event.requestedFavorId : ""}
        />
      </p>
      <p>
        <label htmlFor="amountOffered">AmountOffered</label>
        <input
          id="amountOffered"
          type="number"
          name="amountOffered"
          required
          defaultValue={event ? event.amountOffered : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
    </Form>
  );
}

export default FavorForm;
