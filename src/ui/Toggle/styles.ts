import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  toggleRoot: {
    display: 'flex'
  },
  toggleItem: {
    border: '1px solid var(--border-color-default)',
    lineHeight: '20px',
    fontWeight: 500,
    padding: '5px 15px',
    textDecoration: 'none',
    color: 'var(--font-color-default)',
    '&+$toggleItem': {
      marginLeft: -1
    },
    '&:first-child': {
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6
    },
    '&:last-child': {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6
    },
  },
  selected: {
    borderColor: 'var(--color-accent-emphasis)',
    background: 'var(--color-accent-emphasis)',
    color: 'white',
  },
});

export default useStyles;
