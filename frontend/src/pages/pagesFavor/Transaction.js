import { Form, useNavigate, redirect } from "react-router-dom";

function Transaction() {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method="post">
      <p>
        <label htmlFor="receivingUserName">Usuario a ser pago</label>
        <input
          id="receivingUserName"
          type="text"
          name="receivingUserName"
          required
        />
      </p>
      <p>
        <label htmlFor="amountPaid">Valor</label>
        <input id="amountPaid" type="number" name="amountPaid" required />
      </p>
      <p>
        <label htmlFor="description">Descrição</label>
        <textarea id="description" name="description" rows="4" required />
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

export async function action({ request, params }) {
  const data = await request.formData();

  const userInfo = await JSON.parse(localStorage.getItem("userInfo"));

  const eventData = {
    payingUserId: userInfo.user.id,
    payingUserName: userInfo.user.userName,
    receivingUserId: "645ba68e579260a9b41ad5a8",
    receivingUserName: data.get("receivingUserName"),
    amountPaid: data.get("amountPaid"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:3001/transaction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status !== 201) {
    console.log(response);
    window.alert(`${response.status} ${response}`);
    return redirect("/home/transfer");
  } else {
    window.alert(
      `Transferencia Feita com Sucesso para seu Brother ${data.get(
        "receivingUserName"
      )}`
    );
    return redirect("/home");
  }
}
