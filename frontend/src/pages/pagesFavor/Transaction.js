import { Form, useNavigate } from "react-router-dom";

function Transaction() {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method="post">
      <p>
        <label htmlFor="receivingUserName"></label>
        <input
          id="receivingUserName"
          type="text"
          name="receivingUserName"
          required
          onChange={() => {}}
        />
      </p>
      <p>
        <label htmlFor="amountPaid"></label>
        <input
          id="amountPaid"
          type="number"
          name="amountPaid"
          required
          onChange={() => {}}
        />
      </p>
      <p>
        <label htmlFor="description"></label>
        <textarea
          id="description"
          name="description"
          rows="4"
          required
          onChange={() => {}}
        />
      </p>
      <div>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default Transaction;
