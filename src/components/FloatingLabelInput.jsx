import React from 'react';

const FloatingLabelInput = ({
    id,
    label,
    type = '',
    value,
    onChange,
    placeholder = '',
}) => {
    return (
        <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 box-md px-2 pt-2 pb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                />
                <label
                    htmlFor={id}
                    className="absolute cursor-text  px-1 left-3 top-5 text-slate-400 text-sm transition-all transform origin-left peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-focus:-top-0.1 peer-focus:left-3 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
                >
                    {label}
                </label>
            </div>
        </div>
    );
};

export default FloatingLabelInput;

