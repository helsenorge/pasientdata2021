import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core';

function AutocompleteField({id, options, getOptionLabel, onChange, getOptionSelected, style, onInputChange, inputLabel}) {
    return (
        <Autocomplete
          id={id}
          options={options}
          getOptionLabel={getOptionLabel}
          onChange={onChange}
          getOptionSelected = {getOptionSelected}
          style={style}
          renderInput={(params) => <TextField {...params} onChange={onInputChange} label={inputLabel} variant="outlined" />}
        />
    )
}

export default AutocompleteField
