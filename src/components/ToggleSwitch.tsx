interface ToggleProps {
  active: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleProps> = ({ active, onToggle }) => {
  return (
    <>
      <style>
        {`
          .toggle-button:focus {
            --tw-ring-offset-color: black;
          }
        `}
      </style>
      <button
        aria-label={"toggle"}
        type="button"
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 border-none toggle-button ${
          active
            ? "bg-[hsl(3,86%,64%)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            : "bg-[hsl(226,11%,37%)] focus:outline-none"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 border-none ${
            active ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </>
  );
};

export default ToggleSwitch;
