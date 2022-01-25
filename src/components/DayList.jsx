import React from 'react';
import DayListItem from './DayListItem';

const DayList = (props) => {
  const dynamicDayListItem = props.days.map((singleDay) => {
    return (
      <DayListItem
      key={singleDay.id} 
      name={singleDay.name} 
      spots={singleDay.spots} 
      selected={singleDay.name === props.day}
      setDay={props.setDay}
     />
    );
  });
  return <ul> {dynamicDayListItem} </ul>;
}

export default DayList;