import { useDispatch, useSelector } from "react-redux";
import { setPets } from "../states";

const GetSpecificPets = async ({ petId }) => {
    const token = useSelector((state) => state.token);
    // const dispatch = useDispatch();
    const response = await fetch(`http://localhost:3001/pets/${petId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    console.log(data);

    // setPets(data)
    return (
        <div>
            <div> Your Living in the Past MAN!!!!</div>
            <div>gggggg</div>
        </div>
    );
};

export default GetSpecificPets;
