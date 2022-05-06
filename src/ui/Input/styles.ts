import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inputRoot: {
    display: 'block',
    padding: '5px 12px',
    width: '100%',
    maxWidth: '100%',
    border: '1px solid var(--border-color-muted)',
    borderRadius: 6,
    fontSize: '14px',
    lineHeight: '20px',
    color: 'var(--font-color-default)',
    verticalAlign: 'middle',
    background: 'var(--background-color-default)',
    boxSizing: 'border-box',
    '&:focus': {
      borderColor: 'var(--font-color-accent)',
      outline: 'none',
      boxShadow: 'inset 0 0 0 1px transparent'
    }
  }
});

export default useStyles;
