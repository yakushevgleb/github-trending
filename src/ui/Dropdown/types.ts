export interface DropdownValueType {
  id: string | number | null;
  value: string | number;
}

export interface DropdownOptionType extends DropdownValueType {
  render?: React.ReactNode
}
export interface DropdownProps {
  label: string;
  value: DropdownValueType;
  onChange: (value: DropdownOptionType) => void;
  options: DropdownOptionType[];
  children?: React.ReactNode;
  searchable?: boolean;
  inputProps?: React.HTMLProps<HTMLInputElement>
}

export interface DropdownMenuProps {
  value: DropdownValueType;
  options: DropdownOptionType[];
  onClick: (value: DropdownOptionType) => void;
  inputProps?: React.HTMLProps<HTMLInputElement>
  searchable?: boolean;
  children?: React.ReactNode;
}

export interface DropdownHeaderProps {
  children: React.ReactNode
}

export interface DropdownSearchProps {
  placeholder?: string;
}
