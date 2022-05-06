import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  listItemRoot: {
    padding: 16,
    marginTop: -1,
    listStyleType: 'none',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: 'var(--border-color-muted)',
    '&:firt-of-type': {
      borderColor: 'transparent'
    }
  },
  title: {
    lineHeight: 1.5,
    fontSize: 20
  },
  link: {
    color: 'var(--font-color-accent)',
    textDecoration: 'none',
    '& svg': {
      display: 'inline-block',
      fill: 'var(--font-color-muted)',
      marginRight: 4,
      verticalAlign: 'text-bottom'
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  user: {
    fontWeight: 400
  },
  description: {
    color: 'var(--font-color-muted)',
    paddingRight: 24,
    margin: '4px 0'
  },
  infoBlock: {
    display: 'flex',
    marginTop: 8,
    gap: 16,
    fontSize: 12
  },
  infoItem: {
    color: 'var(--font-color-muted)',
    '& svg': {
      display: 'inline-block',
      verticalAlign: 'text-bottom',
      fill: 'currentcolor'
    },
  },
  infoLink: {
    textDecoration: 'none',
    '&:hover': {
      color: 'var(--font-color-accent)'
    }
  },
  avatar: {
    display: 'inline-block',
    lineHeight: 1,
    verticalAlign: 'middle',
    overflow: 'hidden',
    borderRadius: '50%',
    width: 20,
    height: 20,
    marginBottom: 4,
    marginRight: 2
  },
  floatRight: {
    marginLeft: 'auto'
  }
});

export default useStyles;
