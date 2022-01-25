import React from "react";
import 'components/InterviewerListItem.scss';


const InterviewerListItem = (props) => {
  let interviewerClass = "interviewers__item";
  let interviewerName = '';
  if (props.selected) {
    interviewerClass += "--selected";
    interviewerName = props.name;
  }

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {interviewerName}
    </li>
  )
};

export default InterviewerListItem;