type FilterType = "All" | "Active" | "Inactive";

interface FilterButtonProps {
  title: FilterType;
  isSelected: boolean;
  onClick: (filter: FilterType) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  title,
  isSelected,
  onClick,
}) => {
  const handleClick = () => {
    onClick(title); // 클릭된 필터 상태를 부모에게 전달
  };

  return (
    <>
      <style>
        {`
          .filter-button:focus, .filter-button:focus-visible {
            outline: none;
            --tw-ring-offset-color: hsl(226,25%,17%);
          }
          .filter-button:hover {
            outline: none;
            border-color: hsl(226,11%,37%);
          }
        `}
      </style>
      <button
        className={`border border-[hsl(226,11%,37%)] p-[5px_15px] rounded-[20px] filter-button ${
          isSelected
            ? "bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            : "bg-gray-500"
        }`}
        onClick={handleClick}
      >
        <p className={isSelected ? `text-blue-900 font-bold` : ``}>
          {title || ""}
        </p>
      </button>
    </>
  );
};

export default FilterButton;
