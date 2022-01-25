import React from 'react';
import DayListItem from './DayListItem';

const DayList = (props) => {
  const dynamicDayListItem = props.days.map((singleDay) => {
    return (
      <DayListItem
      key={singleDay.id} 
      name={singleDay.name} 
      spots={singleDay.spots} 
      selected={singleDay.name === props.value}
      setDay={props.onChange}
     />
    );
  });
  return <ul> {dynamicDayListItem} </ul>;
}

export default DayList;
