import CardFavor from "../UI/CardFavor";
import "./Main.css";

function Main(props) {
  const { infoMain } = props;
  return (
    <>
      <main className="favors">
        {infoMain.map((favor) => (
          <CardFavor key={favor.id} favor={favor} />
        ))}
      </main>
    </>
  );
}

export default Main;
