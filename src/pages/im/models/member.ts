import { useState } from 'react';
import { Member } from '../components/interface';
import { members as originMembers } from '../mock';

export default function MemberModel() {
  const [members, setMembers] = useState<Member[]>(originMembers);
  return { members };
}
