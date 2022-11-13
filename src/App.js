import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  const [showEvents, setShowEvents] = useState(true); 
  const [showModal, setShowModal] = useState(true);

  const [events, setEvents] = useState([
    {title: "Moony is the best cat", id: 1},
    {title: "Albert is the best man", id: 2},
    {title: "Sushi is the best food", id: 3}
  ])

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  const handleModalOpenClose = () => {
    setShowModal(false);

    if (!showModal) {
      setShowModal(true);
    }
  }
  
const subtitle = "All the latest events in Mario Kingdom";

  return (
    <div className="App">
      <Title title= "Events in Your Area" subtitle={subtitle}/>
     
     <button style = {{ margin: 20, backgroundColor: 'pink' }} onClick={handleModalOpenClose}> Click Me to Open Modal </button>
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
        
        {showEvents && <EventList events={events} handleClick={handleClick} />}

        {showModal && ( <Modal handleClose={handleModalOpenClose}>
            <div> 
              <h2>Hi</h2>
              <p>I love Albert!</p>
            </div>
          </Modal>
        )}
      
    </div>
  );
}

export default App;
