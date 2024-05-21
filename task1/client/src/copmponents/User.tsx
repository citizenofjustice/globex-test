import Card from "./UI/Card";

import phoneSVG from "../assets/images/phone.svg";
import messageSVG from "../assets/images/message.svg";
import { useAppContext } from "../hooks/useAppContext";

const User = () => {
  const { toggleOpenState } = useAppContext();

  return (
    <Card>
      <div className="user_card" onClick={toggleOpenState}>
        <p className="user_name">Имя Фамилия</p>
        <div className="user_data">
          <div className="data_item">
            <div className="icon_wrapper">
              <img src={phoneSVG} alt="иконка телефона" />
            </div>
            <p className="item_value">+7 (918) 078-17-05</p>
          </div>
          <div className="data_item">
            <img src={messageSVG} alt="иконка почты" />
            <p className="item_value">yysavchenk@mail.ru</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default User;
