
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
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
      {props.currentValute === null 
      ? <div class="box">Выберите валюту</div>
      : <div class="box">
         <h1>{props.valutes[props.currentValute].ID} - {props.valutes[props.currentValute].Name} - {props.valutes[props.currentValute].CharCode}.</h1>
         <p>{formatDate(props.date)} - {props.valutes[props.currentValute].Value}</p>
         <p>{formatDate(props.previousDate)} - {props.valutes[props.currentValute].Previous}</p>
        </div>}
      </div>
    </div>
  )
}

export default InformWindow;

//Необходимый формат даты: '17/06/2023, 13:30:00’