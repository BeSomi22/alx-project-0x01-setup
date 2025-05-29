import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles = "" }) => {
    return (
        <button className={`bg-blue-600 text-white font-semibold ${styles} hover:bg-blue-700 transition`}
        >
            {title}
        </button>

    )
}
export default Button;