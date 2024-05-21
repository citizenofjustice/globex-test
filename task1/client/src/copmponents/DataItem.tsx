interface DataItemProps {
  title: string;
  value: string | undefined;
  direction?: "row" | "column";
}

const DataItem: React.FC<DataItemProps> = ({
  title,
  value,
  direction = "row",
}) => {
  return (
    <div className={`data_item ${direction}`}>
      <div className="item_title">{title}:</div>
      <div className="item_value">{value}</div>
    </div>
  );
};

export default DataItem;
