import "./App.css";
import Calendar from "./components/Calendar";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteAllAppointments } from "./features/calendar";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={() => dispatch(deleteAllAppointments())}>
        Clear All
      </Button>
      <div className="App">
        <Calendar />
      </div>
    </>
  );
}

export default App;
