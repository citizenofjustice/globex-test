import Dialog from "./Dialog";
import { useAppContext } from "../hooks/useAppContext";
import closeSvg from "../assets/images/x.svg";
import DataItem from "./DataItem";

const UserDialog = () => {
  const { dialogData, toggleOpenState } = useAppContext();

  return (
    <Dialog>
      <div className="dialog_top">
        <div className="user_name">{dialogData?.name}</div>
        <div role="button" className="icon_wrapper" onClick={toggleOpenState}>
          <img src={closeSvg} />
        </div>
      </div>
      <div className="dialog_data_list">
        <DataItem title="Телефон" value={dialogData?.phone} />
        <DataItem title="Почта" value={dialogData?.email} />
        <DataItem title="Дата приема" value={dialogData?.hireDate} />
        <DataItem title="Должность" value={dialogData?.positionName} />
        <DataItem title="Подразделение" value={dialogData?.department} />
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
