import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    border: '1px solid',
    borderColor: 'var(--border-color-default)',
    borderRadius: 6
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 16,
    border: '1px solid',
    borderColor: 'var(--border-color-default)',
    borderRadius: 6,
    background: 'var(--background-color-subtle)',
    margin: '-1px -1px 0'
  }
});

export default useStyles;
