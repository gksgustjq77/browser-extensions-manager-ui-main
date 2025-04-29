import { useState } from "react";
import FilterButton from "./Button/FilterButton";
import { FilterType, filter } from "../type/button/FilterButtonType";

interface FilterProps {
  onFilter: (type: FilterType) => void;
}

const CardFilter: React.FC<FilterProps> = ({ onFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(
    FilterType.All
  );
  const handleFilter = (e: FilterType) => {
    onFilter(e);
    selectedFilter === e
      ? setSelectedFilter(FilterType.All)
      : setSelectedFilter(e as FilterType);
  };
  return (
    <>
      <div className=" items-center mb-[20px] gap-[5px] grid xs:justify-center xs:mt-[10px] sm:flex sm:justify-between md:grid-cols-2 md:justify-between md:mt-[20px] lg:justify-between lg:mt-[30px]">
        <h1 className="font-bold text-[32px]">Extensions List</h1>
        <div className="flex justify-center gap-[5px]">
          {filter.map((e) => {
            return (
              <FilterButton
                title={e as FilterType}
                isSelected={selectedFilter === e} // 선택된 필터에 대한 상태 전달
                onClick={() => handleFilter(e)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardFilter;
