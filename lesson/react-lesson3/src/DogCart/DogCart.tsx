import React, {FC, useEffect, useState} from "react";
import MyButton from "../MyButton/MyButton";


const DogCart: FC = () => {
    const [img, setImg] = useState(' ');

    useEffect( () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) =>  console.log(data));
    }, []);

    return (
        <div>
            <h1>DogCart</h1>
            <img src={data?.message} alt=" dog picture ">
                <MyButton onClick={fetchDog} text="Referesh Dog" />
        </div>
)
}

export default DogCart;