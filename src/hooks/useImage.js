import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useImage = (key) => {
    const [data, setData] = useState();

    useEffect(() => {
        const image = `https://www.themealdb.com/images/ingredients/${key}.png`;
        setData(image)
    }, [key]);
    return data;
};

export default useImage;