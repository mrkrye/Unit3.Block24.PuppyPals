import { puppyList } from "./data.js";
import { useState } from "react";
import "./App.css";

function App() { 
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
 
  // console.log("puppyList: ", puppyList);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
      <div className="pupList">
        {puppies.map((puppy) => {
          return (
            <h1
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </h1>
          );
        })}

        {featPupId && (
          <div className="singlePup">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
