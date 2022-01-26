import React from 'react'
import './styles.scss';
//import useVisualMode from "../../hooks/useVisualMode";

const Appointment = (props) => {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  /*
  const {mode, transition, back} = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
   */

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, props.interview)
  }

  return (
    <article className="appointment">
      {props.time ? ('Appointment with time: ' + props.time) : 'No Appointments'}
    </article>
  );
};

export default Appointment;