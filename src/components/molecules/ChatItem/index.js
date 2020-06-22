import React from 'react';
import {View, Text} from 'react-native';
import FromMe from './FromMe';
import FromOther from './FromOther';

const ChatItem = ({isFromMe}) => {
  if (isFromMe) {
    return <FromMe />;
  }
  return <FromOther />;
};

export default ChatItem;
