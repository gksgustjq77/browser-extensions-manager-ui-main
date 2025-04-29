import { useState } from "react";
import data from "../../../data.json"; // id 추가된 JSON 불러오기
import Card from "../../components/Card";
import CardFilter from "../../components/CardFilter";
import { FilterType } from "../../type/button/FilterButtonType";

type CardData = {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

const ExtensionsList: React.FC = () => {
  const [originalData, setOriginalData] = useState<Array<CardData>>(data); // 원본 데이터
  const [cardData, setCardData] = useState<Array<CardData>>(data); // 화면에 보여줄 데이터
  const [currentFilter, setCurrentFilter] = useState<FilterType>(
    FilterType.All
  );

  const handleToggleSwitch = (id: number) => {
    const newData = [...originalData];
    const index = newData.findIndex((e) => e.id === id);
    if (index !== -1) {
      newData[index].isActive = !newData[index].isActive;
      setOriginalData(newData);

      const filteredData = filterData(newData, currentFilter);
      setCardData(filteredData);
    }
  };

  const handleDeleteButton = (id: number) => {
    const newData = originalData.filter((e) => e.id !== id);
    setOriginalData(newData);

    // 현재 필터링 기준을 유지하고 다시 필터링
    const filteredData = filterData(newData, currentFilter);
    setCardData(filteredData);
  };

  const handleFilterButton = (type: FilterType) => {
    setCurrentFilter(type);
    const filteredData = filterData(originalData, type);
    setCardData(filteredData);
  };

  const filterData = (data: CardData[], type: FilterType) => {
    if (type === FilterType.Active) {
      return data.filter((e) => e.isActive);
    } else if (type === FilterType.Inactive) {
      return data.filter((e) => !e.isActive);
    }
    return data;
  };

  return (
    <>
      <CardFilter onFilter={handleFilterButton} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((e) => (
          <Card
            key={e.id}
            cardInfo={e}
            onToggle={() => handleToggleSwitch(e.id)}
            onDelete={() => handleDeleteButton(e.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ExtensionsList;
