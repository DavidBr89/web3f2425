import Loading from "../components/Loading";
import { useParkings } from "../contexts/ParkingsContext";

const ParkingsPage = () => {
  const { parkings, isLoading, error } = useParkings();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Fout bij het ophalen van de parkings.</p>;
  }

  return (
    <div>
      {parkings.map((p) => {
        return (
          <div
            className="w-full p-4 border border-sky-100 rounded-lg my-4 flex items-center justify-between gap-4 hover:bg-sky-100 cursor-pointer"
            key={p.id}>
            <div>
              <p className="font-extrabold uppercase">{p.name}</p>
              <p className="font-thin text-sm">{p.description}</p>
            </div>

            <p className="font-light">{p.availablecapacity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ParkingsPage;
