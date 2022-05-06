import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dropdownRoot: {
    position: 'relative'
  },
  valueRoot: {
    display: 'inline-block',
    padding: '0 15px',
    color: 'var(--font-color-muted)',
    cursor: 'pointer',
    '&:hover': {
      color: 'var(--font-color-default)'
    },
    '&:after': {
      display: 'inline-block',
      width: 0,
      height: 0,
      verticalAlign: -2,
      content: '""',
      border: '4px solid',
      borderRightColor: "transparent",
      borderBottomColor: "transparent",
      borderLeftColor: "transparent"
    }
  },
  displayValue: {
    fontWeight: 600
  },
  menuRoot: {
    zIndex: 99,
    borderColor: 'var(--border-color-default)',
    boxShadow: '0 8px 24px #010409',
    width: 300,
    marginTop: 4,
    marginBottom: 20,
    overflow: 'hidden',
    fontSize: 12,
    color: 'var(--font-color-default)',
    background: 'var(--background-color-overlay)',
    backgroundClip: 'padding-box',
    border: '1px solid',
    borderRadius: 6,
    position: 'absolute',
    right: 0
  },
  menuList: {
    maxHeight: 400,
    overflow: 'auto'
  },
  menuItem: {
    textAlign: 'left',
    background: 'var(--background-color-overlay)',
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    padding: '8px 8px 8px 30px',
    cursor: 'pointer',
    borderBottom: '1px solid var(--border-color-muted)',
    '&:hover': {
      color: 'var(--font-color-emphasis)',
      background: 'var(--color-accent-emphasis)'
    },
    '& svg': {
      fill: 'currentcolor',
      float: 'left',
      marginLeft: -20
    }
  },
  menuItemText: {

  },
  menuHeader: {
    background: 'var(--background-color-overlay)',
    padding: '8px 10px',
    lineHeight: '16px',
    borderBottom: '1px solid var(--border-color-muted)'
  },
  menuTitle: {
    fontWeight: 600,
    color: 'var(--font-color-default)'
  },
  menuFilter: {
    background: 'var(--background-color-overlay)',
    paddingBottom: 10,
    borderBottom: '1px solid var(--border-color-muted)'
  },
  menuTextFilter: {
    padding: '10px 10px 0',
  }
});

export default useStyles;
