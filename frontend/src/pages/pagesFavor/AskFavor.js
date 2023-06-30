import { json, redirect } from "react-router-dom";

import FavorForm from "../../components/FavorForm";

function AskFavorPage() {
  return <FavorForm />;
}

export default AskFavorPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    requestingFavorId: data.get("requestingFavorId"),
    requestedFavorId: data.get("requestedFavorId"),
    amountOffered: data.get("amountOffered"),
    description: data.get("description"),
    type: data.get("type"),
  };

  const response = await fetch("mongodb://localhost:27017/BrotherBank/favor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.error) {
    throw json(
      { message: response.error.message },
      { status: response.error.status }
    );
  }
  return redirect("/events");
}
