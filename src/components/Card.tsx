import RemoveButton from "./Button/RemoveButton";
import ToggleSwitch from "./ToggleSwitch";

interface CardInfo {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

interface CardProps {
  cardInfo: CardInfo;
  onToggle: () => void;
  onDelete: () => void;
}
const Card: React.FC<CardProps> = ({ cardInfo, onToggle, onDelete }) => {
  return (
    <>
      <div className="bg-[hsl(226,25%,17%)] p-[15px] rounded-[15px] border border-[hsl(226,11%,37%)] flex flex-col">
        <div className="flex items-start gap-5">
          <img src={cardInfo.logo} alt={cardInfo.name}></img>
          <div className="flex flex-col text-left">
            <div className="font-bold text-[1em] break-all">
              {cardInfo.name}
            </div>
            <div className="break-all text-[0.9em]">{cardInfo.description}</div>
          </div>
        </div>
        <div className="flex-grow" />
        <div className="flex justify-between items-center mt-10">
          <RemoveButton title={""} onDelete={onDelete}></RemoveButton>
          <ToggleSwitch
            active={cardInfo.isActive}
            onToggle={onToggle}
          ></ToggleSwitch>
        </div>
      </div>
    </>
  );
};
export default Card;
