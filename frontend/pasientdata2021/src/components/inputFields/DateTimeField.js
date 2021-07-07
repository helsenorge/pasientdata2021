import DateTimePicker from "@material-ui/lab/DateTimePicker";
import DateFnsUtils from "@material-ui/lab/adapter/DateFns"; // choose your lib
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { TextField } from "@material-ui/core";


function DateTimeField() {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
            }}
        />
        </LocalizationProvider>
    )
}

export default DateTimeField
