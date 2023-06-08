export default {
  box: {
    maxHeight: '220px',
    width: '100%',
    padding: '10px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    position: 'relative',
    flexGrow: 0,
    flexShrink: 0,
    borderLeft: '2px solid #e4e4e4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideVideo: {
    display: 'none',
  },
  editorWrapper: {
    /* position: absolute,
    top: 15px,
    right: 15px,
    bottom: 15px,
    left: 15px, */

    flex: '1 1',
    backgroundColor: '#fcfcfc',
    boxShadow: 'inset 0 1px 3px 0 rgba(180, 180, 180, 0.5)',
    borderRadius: '6px',
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  editorScrollBox: {
    padding: '12px',
    overflowY: 'auto',
    maxHeight: '200px',
    textAlign: 'left',
    lineHeight: '23px',
  },
  /* .editorWrapper :global(.DraftEditor-root) : {
    padding: 9px 50px 9px 13px,
  } */
  textLength: {
    position: 'absolute',
    right: '5px',
    bottom: '5px',
    fontSize: '12px',
    lineHeight: '1em',
    transform: 'scale(0.8)',
    color: 'lightgrey',
  },
  textExceed: {
    color: '#f0062a',
  },
  buttonBox: {
    flexShrink: '0',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: '12px',
  },

  submitBtn: {
    height: '22px',
    width: '22px',
    zIndex: '11',
    border: 'none',
    backgroundColor: 'transparent',
    /* background-image: url('../imgs/btn-send-message-grey.svg'), */
    margin: '0 5px 0 15px',
  },
  submitBtnCanUse: {
    cursor: 'pointer',
    /* background-image: url('../imgs/btn-send-message-blue.svg'), */
  },
  mention: {
    display: 'inline-block',
    backgroundColor: '#ddd',
    color: '#36485e',
  },
  editor: {
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    cursor: 'text',
    padding: '16px',
    borderRadius: '2px',
    marginBottom: '2em',
    boxShadow: 'inset 0px 1px 8px -3px #ababab',
    background: '#fefefe',
  },
};
