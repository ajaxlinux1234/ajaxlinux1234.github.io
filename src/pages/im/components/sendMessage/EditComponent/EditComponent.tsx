import React, { MouseEvent, ReactElement, useCallback, useMemo, useRef, useState } from 'react';
import { omit } from 'lodash-es';
import { useModel } from 'umi';
import { AtomicBlockUtils, EditorState, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
  MentionData,
  MentionPluginTheme,
} from '@draft-js-plugins/mention';
import createEmojiPlugin from '@draft-js-plugins/emoji';
import createImagePlugin from '@draft-js-plugins/image';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import createCounterPlugin from '@draft-js-plugins/counter';
import '@draft-js-plugins/emoji/lib/plugin.css';
import '@draft-js-plugins/mention/lib/plugin.css';
import '@draft-js-plugins/image/lib/plugin.css';
import '@draft-js-plugins/linkify/lib/plugin.css';
import editorStyles from './editor.less';
import mentionsStyles from './mentionsStyles.less';
import { createElementMap } from '@/pages/utils';
import { MessageType, SendType } from '../../interface';
import { v1 } from 'uuid';

export interface EntryComponentProps {
  className?: string;
  onMouseDown(event: MouseEvent): void;
  onMouseUp(event: MouseEvent): void;
  onMouseEnter(event: MouseEvent): void;
  role: string;
  id: string;
  'aria-selected'?: boolean | 'false' | 'true';
  theme?: MentionPluginTheme;
  mention: MentionData;
  isFocused: boolean;
  searchValue?: string;
}

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true,
});
const imagePlugin = createImagePlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const linkifyPlugin = createLinkifyPlugin({
  component(props) {
    const { href } = props;
    const omitProps = omit(props, ['className']);
    return (
      <a
        {...omitProps}
        style={{ color: '#5e93c5', textDecoration: 'none' }}
        onClick={() => window.open(href, '_blank')}
      />
    );
  },
});

const counterPlugin = createCounterPlugin({
  theme: {
    counter: editorStyles.counter,
    counterOverLimit: editorStyles.counterOverLimit,
  },
});

const { CharCounter } = counterPlugin;

const { hasCommandModifier } = KeyBindingUtil;

function myKeyBindingFn(e: any): string | null {
  if (e.code === 'KeyZ') {
    return 'undo';
  }
  if (e.keyCode === 13 && !e.shiftKey) {
    return 'send-msg';
  }
  return getDefaultKeyBinding(e);
}

function Entry(props: EntryComponentProps): ReactElement {
  const {
    mention,
    theme,
    searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars
    isFocused, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <div className={theme?.mentionSuggestionsEntryContainer}>
        {/* <div className={theme?.mentionSuggestionsEntryContainerLeft}>
          <img
            src={mention.avatar}
            className={theme?.mentionSuggestionsEntryAvatar}
            role="presentation"
          />
        </div> */}

        <div className={theme?.mentionSuggestionsEntryContainerRight}>
          <div className={theme?.mentionSuggestionsEntryText}>{mention.name}</div>

          <div className={theme?.mentionSuggestionsEntryTitle}>{mention.title}</div>
        </div>
      </div>
    </div>
  );
}

export default function CustomMentionEditor(): ReactElement {
  const ref = useRef<Editor>(null);

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [open, setOpen] = useState(false);
  const { members: mentions }: any = useModel('im.member');
  const { setMessages } = useModel('im.message');
  const [suggestions, setSuggestions] = useState(mentions);

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      entityMutability: 'IMMUTABLE',
      theme: mentionsStyles,
      mentionPrefix: '@',
      supportWhitespace: true,
    });
    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin, emojiPlugin, imagePlugin, linkifyPlugin, counterPlugin];
    return { plugins, MentionSuggestions };
  }, []);

  const onChange = useCallback((_editorState: EditorState) => {
    setEditorState(_editorState);
  }, []);
  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(({ value }: { value: string }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  }, []);
  const sendMsg = () => {
    if (!ref.current!.editor!.editor?.firstChild) {
      return;
    }
    const message = createElementMap(ref.current!.editor!.editor?.firstChild as Element);
    setMessages({
      type: MessageType.RICHTEXT,
      uuid: v1(),
      sendId: '2',
      send: '李四',
      message: [message],
      createTime: +new Date(),
      sendType: SendType.OUT,
    });
  };

  const insertImage = (url: string) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src: url });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
  };

  const handlePastedFiles: any = (files: File[]) => {
    const url = URL.createObjectURL(new Blob(files));
    setEditorState(insertImage(url));
  };

  const handleKeyCommand = (command: string) => {
    if (command === 'send-msg') {
      sendMsg();
      return 'handled';
    }
    return 'not-handled';
  };
  return (
    <div
      className={editorStyles.editor}
      onClick={() => {
        ref.current!.focus();
      }}
    >
      <div className={editorStyles.emojiBox}>
        <EmojiSelect />
      </div>
      <Editor
        editorKey={'editor'}
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        ref={ref}
        keyBindingFn={myKeyBindingFn}
        handleKeyCommand={handleKeyCommand}
        handlePastedFiles={handlePastedFiles}
      />
      <span className={editorStyles.count}>
        <CharCounter limit={20000} />
        /20000
      </span>
      <EmojiSuggestions />
      <MentionSuggestions
        open={open}
        onOpenChange={onOpenChange}
        suggestions={suggestions}
        onSearchChange={onSearchChange}
        onAddMention={() => {
          // get the mention object selected
        }}
        entryComponent={Entry}
        popoverContainer={({ children }) => (
          <div style={{ minWidth: '100px', position: 'absolute' }}>{children}</div>
        )}
      />
    </div>
  );
}
