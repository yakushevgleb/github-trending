import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  content: {
    maxWidth: 1012,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 40
  },
  header: {
    background: '#161b22',
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    borderBottom: '1px solid #30363d'
  },
  title: {
    color: 'var(--font-color-default)'
  },
  caption: {
    color: 'var(--font-color-muted)'
  }
});

export default useStyles;
