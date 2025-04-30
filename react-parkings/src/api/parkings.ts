import  Axios  from "axios";

// const fetchParkings  = async (): Promise<ParkingResponse> => {
//     const res = await fetch("https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/record");
//     return res.json();
// }

const fetchParkingsWithAxios = async () => {
    return await Axios.get<ParkingResponse>("https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records")
}

export const parkingsPromise = fetchParkingsWithAxios();