import React, { useState } from 'react';
import './App.css'
function PersonCard(props) {
  const [age, setAge] = useState(props.age);

  const handleBirthday = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h2>{props.firstName} {props.lastName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={handleBirthday}>Happy Birthday!</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName="Doe" 
        lastName="Jane" 
        age={45} 
        hairColor="Black" 
      />
      <PersonCard 
        firstName="Smith" 
        lastName="John" 
          age={88}
        hairColor="Brown" 
      />
      <PersonCard 
        firstName="Fillmore" 
        lastName="Millard" 
        age={50}
        hairColor="Brown" 
      />
      <PersonCard 
        firstName="Smith" 
        lastName="Maria" 
        age={62}
        hairColor="Brown" 
      />
    </div>
  );
}

export default App;
