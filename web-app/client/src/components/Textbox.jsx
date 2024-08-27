import React from "react";
import clsx from "clsx";

const Textbox = React.forwardRef(
  ({ type, placeholder, label, className, register, name, error }, ref) => {
    return (
      <div className='w-full flex flex-col gap-1'>
        {label && (
          <label htmlFor={name} className='text-[#52241d]'>
            {label}
          </label>
        )}

        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "px-3 py-2.5 2xl:py-3 border border-[#924b40] placeholder-[#9e6e66] text-[#52241d] outline-none text-base focus:ring-2 ring-[#d8a198]",
              className
            )}
          />
        </div>
        {error && (
          <span className='text-xs text-[#f64949fe] mt-0.5 '>{error}</span>
        )}
      </div>
    );
  }
);
export default Textbox;