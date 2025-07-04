interface InputFieldProps {
    label?: string;
    labelFor?: string;
    labelClassName?: string;
    type: 'text' | 'password' | 'date' | 'number' | 'checkbox' | 'radio' | 'email' | 'tel' | 'url' | 'time';
    id: string;
    name: string;
    placeholder?: string;
    value?: string;
    inputClassName?: string;
    children?: React.ReactNode;
    boxClassName?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField = ({ label, labelFor, labelClassName="", type="text", id, name, placeholder, value, inputClassName="", boxClassName="", children, onChange }: InputFieldProps) => {
    return (
        <div className={`mb8 ${boxClassName}`}>
            { label && <label htmlFor={labelFor} className={labelClassName}>{label}</label> }
            <div>
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    className={`${inputClassName}`}
                    onChange={onChange}
                />
                { children && <div>{children}</div> }
            </div>
        </div>
    )
}

export default InputField;