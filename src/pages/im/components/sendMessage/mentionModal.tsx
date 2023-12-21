import { Input } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './mentionModal.less';
interface MentionModal {
  hideMentionModal: () => void;
  insertMention: (id: string, name: string) => void;
}
export default function MentionModal(props: MentionModal) {
  const [top, setTop] = useState('');
  const [left, setLeft] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [list] = useState([
    { id: 'a', name: '张三' },
    { id: 'b', name: '李四' },
    { id: 'c', name: '小明' },
    { id: 'd', name: '小李' },
    { id: 'e', name: '小红' },
  ]);
  const searchedList = useMemo(() => {
    const val = searchVal.trim().toLowerCase();
    return list.filter((item) => {
      const name = item.name.toLowerCase();
      if (name.indexOf(val) >= 0) {
        return true;
      }
      return false;
    });
  }, [searchVal, list]);

  useEffect(() => {
    const domSelection = document.getSelection();
    const domRange = domSelection?.getRangeAt(0);
    if (domRange == null) return;
    const rect = domRange.getBoundingClientRect();
    // 定位 modal
    setTop(`${rect.top + 20}px`);
    setLeft(`${rect.left + 5}px`);
  }, []);

  function inputKeyupHandler(event: { key: string }) {
    // esc - 隐藏 modal
    if (event.key === 'Escape') {
      props.hideMentionModal();
    }
    // enter - 插入 mention node
    if (event.key === 'Enter') {
      // 插入第一个
      const firstOne = searchedList[0];
      if (firstOne) {
        const { id, name } = firstOne;
        insertMentionHandler(id, name);
      }
    }
  }
  function insertMentionHandler(id: string, name: string) {
    props.insertMention(id, name);
    props.hideMentionModal(); // 隐藏 modal
  }
  return (
    <div className={styles['mention-modal']} style={{ top: top, left: left }}>
      <Input
        className={styles['mention-input']}
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        autoFocus
        onKeyUp={inputKeyupHandler}
      />
      <ul className={styles['mention-list']}>
        {searchedList.map((item) => (
          <li key={item.id} onClick={() => insertMentionHandler(item.id, item.name)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
