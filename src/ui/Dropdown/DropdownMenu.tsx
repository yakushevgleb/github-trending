import CheckSvg from "assets/icons/CheckSvg";
import React from "react";
import Input from "ui/Input";
import useStyles from "./styles";
import { DropdownMenuProps } from "./types";

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const classes = useStyles();
  const [search, setSearch] = React.useState("");

  const renderOptions = React.useMemo(() => {
    if (props.searchable) {
      const filteredOptions = props.options.filter((opt) => opt.value.toString().toLowerCase().includes(search.toLowerCase()))
      return filteredOptions || [];
    }
    return props.options;
  }, [search, props.options, props.searchable])

  return (
    <div className={classes.menuRoot}>
      {props.children}
      {props.searchable && (
        <div className={classes.menuFilter}>
          <div className={classes.menuTextFilter}>
            <Input {...props.inputProps} value={search} onChange={(e) => setSearch(e.currentTarget.value)} type="text" />
          </div>
        </div>
      )}
      <div className={classes.menuList}>
        {renderOptions?.map((optionItem) => optionItem.render ? optionItem.render : 
          (
            <div key={optionItem.id} className={classes.menuItem} onClick={() => props.onClick({ id: optionItem.id, value: optionItem.value })}>
              {props.value?.id === optionItem.id && (
                <CheckSvg />
              )}
              <span className={classes.menuItemText}>{optionItem.value}</span>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default DropdownMenu;
