import { Form, useNavigate, redirect } from "react-router-dom";
import { useState } from "react";
import CardUser from "../../UI/CardUser";

let addressee = {};

const catchUser = (info) => {
  addressee = info;
};

function Transaction() {
  const [findUser, setFindUser] = useState("");
  const [userFound, setUserFound] = useState("");

  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  const nameChangehandler = (event) => {
    const { value } = event.target;
    setFindUser(value);
  };

  const findUserByName = async () => {
    const user = {
      name: findUser,
    };

    try {
      const response = await fetch("http://localhost:3001/user/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      setUserFound(data);
      catchUser(data);
    } catch (error) {
      console.log(error.message);
      setUserFound(error.message);
    }
  };

  return (
    <>
      <Form method="post">
        <p>
          <label htmlFor="receivingUserName">Usuario a ser pago</label>
          <input
            id="receivingUserName"
            type="text"
            name="receivingUserName"
            value={findUser}
            onChange={nameChangehandler}
            required
          />
          <button disabled={!findUser} type="button" onClick={findUserByName}>
            Verificar
          </button>
        </p>
        <CardUser info={userFound} />
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
    </>
  );
}

export default Transaction;

export async function action({ request, params }) {
  const data = await request.formData();

  const userInfo = await JSON.parse(localStorage.getItem("userInfo"));

  const eventData = {
    payingUserId: userInfo.user.id,
    payingUserName: userInfo.user.userName,
    receivingUserId: addressee.id,
    receivingUserName: data.get("receivingUserName"),
    amountPaid: +data.get("amountPaid"),
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
