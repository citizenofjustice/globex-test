import Card from "./UI/Card";
import phoneSVG from "../assets/images/phone.svg";
import messageSVG from "../assets/images/message.svg";
import { useAppContext } from "../hooks/useAppContext";
import { User } from "../types/User";

interface UserProps {
  userData: User;
}

const UserCard: React.FC<UserProps> = ({ userData }) => {
  const { toggleOpenState, setDialogData } = useAppContext();
  const { name, phone, email } = userData;

  const handleUserCardClick = () => {
    setDialogData(userData);
    toggleOpenState();
  };

  return (
    <Card>
      <div className="user_card" onClick={handleUserCardClick}>
        <p className="user_name">{name}</p>
        <div className="user_data">
          <div className="data_item">
            <div className="icon_wrapper">
              <img src={phoneSVG} alt="иконка телефона" />
            </div>
            <p className="item_value">{phone}</p>
          </div>
          <div className="data_item">
            <img src={messageSVG} alt="иконка почты" />
            <p className="item_value">{email}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
