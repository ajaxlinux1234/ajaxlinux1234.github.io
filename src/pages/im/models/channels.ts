/**
 * channel操作model
 */
import { channels as channelsMock } from '@im/mock';
import type { Channel } from '@imCmp/interface';
import { useEffect, useState } from 'react';
import { request } from '@im/fetch';

export default function channelsModel() {
  const [channels, setChannels] = useState<Channel[]>();
  const [activeChannel, setActiveChannel] = useState<Channel>();
  const getChannels = async () => {
    const res = await request('/channels/getChannels');
    const oChannels = res.data || channelsMock;
    setChannels(oChannels);
    setActiveChannel(oChannels[0]);
  };

  useEffect(() => {
    getChannels();
  }, []);

  return {
    channels,
    setChannels,
    activeChannel,
    setActiveChannel,
  };
}
