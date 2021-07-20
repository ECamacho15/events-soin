import { useRef } from 'react';

import Button from '../ui/button';
import classes from './events-search.module.css';

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);    
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Año</label>
          <select id='year' ref={yearInputRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Mes</label>
          <select id='month' ref={monthInputRef}>
            <option value='1'>Enero</option>
            <option value='2'>Febrero</option>
            <option value='3'>Marzo</option>
            <option value='4'>Abril</option>
            <option value='5'>Mayo</option>
            <option value='6'>Junio</option>
            <option value='7'>Julio</option>
            <option value='8'>Agosto</option>
            <option value='9'>Septiembre</option>
            <option value='10'>Octubre</option>
            <option value='11'>Noviembre</option>
            <option value='12'>Diciembre</option>
          </select>
        </div>
      </div>
      <Button>Buscar</Button>
    </form>
  );
}

export default EventsSearch;
