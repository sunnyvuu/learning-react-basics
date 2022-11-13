import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  const [showEvents, setShowEvents] = useState(true); 
  const [showFeelings, setShowFeelings] = useState(true);

  const [events, setEvents] = useState([
    {title: "Moony is the best cat", id: 1},
    {title: "Albert is the best man", id: 2},
    {title: "Sushi is the best food", id: 3}
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id; 
      })
    })
    console.log(id);
  }

const subtitle = "All the latest events in Mario Kingdom";

  return (
    <div className="App">
      <Title title= "Events in Your Area" subtitle={subtitle}/>
     
        {showEvents && (
          <div>
            <button onClick={() => setShowEvents(false)}>Hide Events</button>
          </div>
        )}
        
        {!showEvents && (
          <div>
            <button onClick={() => setShowEvents(true)}>Show Events</button>
          </div>
        )}


        {showEvents && events.map((events, index) => (
          <div key={events.id}>
            <h2>{index} - {events.title}</h2>
            <button onClick={() => handleClick(events.id)}> Delete Event </button>
          </div>
        ))}
      
      {/* <Modal> 
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      <Modal>
        <h2>Hi</h2>
        <p>I love Albert!</p>
      </Modal>
    </div>
  );
}

export default App;
