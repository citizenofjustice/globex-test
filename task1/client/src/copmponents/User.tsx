import Card from "./UI/Card";

import phoneSVG from "../assets/images/phone.svg";
import messageSVG from "../assets/images/message.svg";

const User = () => {
  return (
    <Card>
      <div className="user_card">
        <p className="user_name">Имя Фамилия</p>
        <div className="user_data">
          <div className="user_attribute">
            <div className="icon_wrapper">
              <img src={phoneSVG} alt="иконка телефона" />
            </div>
            <p className="attribute_value">+7 (918) 078-17-05</p>
          </div>
          <div className="user_attribute">
            <img src={messageSVG} alt="иконка почты" />
            <p className="attribute_value">yysavchenk@mail.ru</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default User;
