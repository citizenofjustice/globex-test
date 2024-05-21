import Dialog from "./Dialog";
import { useAppContext } from "../hooks/useAppContext";
import closeSvg from "../assets/images/x.svg";
import DataItem from "./DataItem";

const UserDialog = () => {
  const { toggleOpenState } = useAppContext();

  return (
    <Dialog>
      <div className="dialog_top">
        <div className="user_name">Евгения Савченко</div>
        <div role="button" className="icon_wrapper" onClick={toggleOpenState}>
          <img src={closeSvg} />
        </div>
      </div>
      <div className="dialog_data_list">
        <DataItem title="Телефон" value="+7 (918) 078-17-05" />
        <DataItem title="Телефон" value="+7 (918) 078-17-05" />
      </div>
      <div className="additional_info">
        <DataItem
          title="Дополнительная информация"
          value="Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы."
          direction="column"
        />
      </div>
    </Dialog>
  );
};

export default UserDialog;
