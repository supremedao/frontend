import { Controller } from "react-hook-form";
import dynamic from "next/dynamic";

function validateinput(el) {
  if ((parseFloat(el.value) < 99) & (parseFloat(el.value) > 0)) {
    el.value = parseFloat(el.value).toFixed(2);
  } else {
    //show invalidate message.
    //clear the input value.
    el.value = "";
  }
}

export const FormattedInput = ({
  control,
  transform,
  name,
  className = "",
  defaultValue,
}) => (
  <Controller
    defaultValue={defaultValue}
    control={control}
    name={name}
    render={({ field }) => (
      <input
        onChange={(e) => {
          console.log(e.target.value);
          const regex = /^\d+(\.\d{0,5})?$/;
          if (regex.test(e.target.value) || e.target.value === "") {
            field.onChange(e);
          }
        }}
        value={transform?.input(field.value) || field.value}
        className={className}
        // onKeyDown={(event) => {
        //   console.log(event.keyCode);
        //   return (
        //     (event.keyCode >= 48 && event.keyCode <= 57) ||
        //     event.keyCode === 46 ||
        //     event.keyCode === 190 ||
        //     event.keyCode === 0
        //   );
        // }}
        // onBlur={validateinput}
      />
    )}
  />
);
