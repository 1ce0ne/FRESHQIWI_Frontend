
const InformWindow = (props) => {
  function formatDate(inputDate) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };
  
    const dateObject = new Date(inputDate);
    const formattedDate = dateObject.toLocaleString('en-GB', options);
    
    const [datePart, timePart] = formattedDate.split(', ');
    const [day, month, year] = datePart.split('/');
    const [time, timezone] = timePart.split(' ');
  
    return `${day}/${month}/${year}, ${time}`;
  }

  return (
    <div>
      {props.currentValute === null 
      ? <div style={{marginTop: '260px'}} className='box'>
          <p className='subtitle is-5'>Выберите валюту</p>
        </div>
      : <div style={{marginTop: '260px'}} className='box'>
         <h4 className='title is-4'>
          {props.valutes[props.currentValute].ID} - {props.valutes[props.currentValute].Name} - {props.valutes[props.currentValute].CharCode}.
         </h4>
         <p className='subtitle is-5'>
          {formatDate(props.date)} - {props.valutes[props.currentValute].Value} <br/>
          {formatDate(props.previousDate)} - {props.valutes[props.currentValute].Previous}
          </p>
        </div>}
    </div>
  )
}

export default InformWindow;