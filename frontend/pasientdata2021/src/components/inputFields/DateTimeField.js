import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import noLocale from "date-fns/locale/nb";

function DateTimeField({selectedDate, handleDateChange}) {
    // Pair this component with a hook like this:
    // const [selectedDate, handleDateChange] = useState(new Date());


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={noLocale}>
            <DateTimePicker 
                value={selectedDate} 
                onChange={handleDateChange}
                variant="inline"
                inputVariant="outlined"
                format="hh:mm dd/MM/yyyy"
                ampm={false}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DateTimeField
