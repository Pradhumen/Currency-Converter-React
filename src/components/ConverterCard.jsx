import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ConverterCard = () => {
  const [select, setSelect] = useState();

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setSelect(data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  if (!select) {
    return <div>Loading...</div>;
  }


  console.log(select.date); 


  return (
    <div className="container justify-center flex h-screen">
      <div className="m-auto main">
        <div className="bg-white p-10 flex rounded-md shadow-lg m-2 w-96">
          <div className="justify-start">
            <input
              className="border-none focus:outline-none"
              type="text"
              placeholder="From"
            />
          </div>

          <div className="select">
            <select name="" id="">
              <option value="">USD</option>
              <option value="">INR</option>
            </select>
          </div>

          <div className="justify-end swap">
            <FontAwesomeIcon icon={faArrowDown} size="1x" />
            <FontAwesomeIcon icon={faArrowUp} size="1x" />
          </div>
        </div>

        <div className="bg-white p-10 flex rounded-md shadow-lg m-2 w-96">
          <div className="justify-start">
            <input
              className="border-none focus:outline-none"
              type="text"
              placeholder="To"
            />
          </div>

          <div className="select">
            <select name="" id="">
              <option value="">USD</option>
              <option value="">INR</option>
            </select>
          </div>
        </div>

        <button className="bg-blue-500 p-3 text-white m-2 w-96">
          Convert USD to INR
        </button>
      </div>
    </div>
  );
};

export default ConverterCard;
