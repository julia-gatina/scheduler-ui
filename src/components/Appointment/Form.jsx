import React, {useState} from "react"
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

const Form = (props) => {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const studentChanged = (event) => {
    setStudent(event.target.value);
  };

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  // to cancel entered student name and/or selected interviewer
  const cancel = () => {
    reset();
    props.onCancel();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={studentChanged}
            value={student}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          onChange={setInterviewer}
          selected={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={props.onSave(student, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  );
};

export default Form;