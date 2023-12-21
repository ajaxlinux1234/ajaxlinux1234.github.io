import { members as originMembers } from '@im/mock';
import { Member } from '@imCmp/interface';
import { useState } from 'react';

export default function MemberModel() {
  const [members, setMembers] = useState<Member[]>(originMembers);
  return { members };
}
