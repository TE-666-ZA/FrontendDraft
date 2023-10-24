 import React from "react";


let nextCity = 'Madrid';
function CityPage(): JSX.Element {

const [city, setCity] = React.useState("This is Berlin!");
const [cityPicture, setCityPicture] = React.useState("https://www.berlin.de/binaries/asset/image_assets/8215661/ratio_4_3/1686824224/800x600/");

function changeCity() {

    if (nextCity === 'Madrid') {
        switchCityMadrid()
    }
    else if (nextCity === 'Paris') {
        switchCityParis()
    }
  else if (nextCity === 'Berlin')   {
        switchCityBerlin()
    }
}


    function switchCityMadrid() {
        setCity("This is Madrid!");
        setCityPicture("https://cdn.tripster.ru/thumbs2/f95c62d0-d1de-11ec-ac17-dedfd18f3562.800x600.jpeg");
        nextCity = 'Paris'
    }
    function switchCityParis() {
        setCity("This is Paris!");
        setCityPicture("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg");
        nextCity = 'Berlin'
    }
    function switchCityBerlin() {
        setCity('This is Berlin!');
        setCityPicture("https://www.berlin.de/binaries/asset/image_assets/8215661/ratio_4_3/1686824224/800x600/");
        nextCity = 'Madrid';
    }




return (
        <div className="App">
        <h1>CityPage</h1>
        <img className="img" src={cityPicture} alt={"City"} />
        <p className={"city-name"}>{city}</p>
            <button onClick={changeCity}>Switch City!</button>
    </div>
    )

}

export default CityPage;