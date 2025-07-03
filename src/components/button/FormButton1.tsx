interface FormButtonProps {
    type: "button" | "submit";
    onClick?: () => void;
    disabled?: boolean;
    onSubmit?: (e: React.FormEvent) => void;
    className?: string;
    children: React.ReactNode;
}

const FormButton1 = ({ type="button", onClick, disabled, onSubmit, className="", children }: FormButtonProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        if (onSubmit) {
            onSubmit(e); // onSubmit이 있을 경우 호출
        }
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            onSubmit={type === "submit" ? handleSubmit : undefined}
            className={className}
        >
            {children}
        </button>        
    )
}
export default FormButton1;