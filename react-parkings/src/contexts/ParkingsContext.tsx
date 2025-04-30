import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { parkingsPromise } from "../api/parkings";

interface ParkingContext {
  parkings: Parking[];
  isLoading: boolean;
  error: unknown;
}

const ParkingsContext = createContext<ParkingContext | null>(null);

const ParkingsContextProvider = (props: PropsWithChildren) => {
  const [parkings, setParkings] = useState<Parking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await parkingsPromise;
        setParkings(data.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <ParkingsContext value={{ parkings, isLoading, error }}>
      {props.children}
    </ParkingsContext>
  );
};

export default ParkingsContextProvider;

export const useParkings = () => {
  const context = useContext(ParkingsContext);

  if (!context) {
    throw new Error(
      "ParkingsContext moet in de ParkingsContextProvider zitten."
    );
  }
  return context;
};
