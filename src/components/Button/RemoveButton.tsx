import { SetStateAction, useState } from "react";

interface ButtonProps {
  title: string;
  setCardData?: React.Dispatch<SetStateAction<any>>;
  onClick?: () => void;
  onDelete: () => void;
}

const RemoveButton: React.FC<ButtonProps> = ({ title, onDelete }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleFocus = () => {
    setChecked(true);
  };

  const handleBlur = () => {
    setChecked(false);
  };

  const handleClick = () => {
    onDelete();
  };

  return (
    <>
      <style>
        {`
          .button-ring:focus, .button-ring:focus-visible {
            outline: none;
            --tw-ring-offset-color: hsl(226,25%,17%);
          }
          .button-ring:hover {
            outline: none;
            border-color: hsl(226,11%,37%);
            background : hsl(3, 86%, 64%);
            color : hsl(226,25%,17%);
          }
        `}
      </style>
      <button
        aria-label={title || "Remove"}
        className={`border border-[hsl(226,11%,37%)] p-[5px_15px] rounded-[20px] button-ring ${
          checked
            ? "bg-[hsl(226,11%,37%)] focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            : ""
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
      >
        <p className={checked ? "text-blue-900 font-bold" : ""}>
          {title || "Remove"}
        </p>
      </button>
    </>
  );
};

export default RemoveButton;
