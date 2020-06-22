import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Header from '../../components/molecules/Header';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import ChatItem from '../../components/molecules/ChatItem';
import ButtonSend from '../../components/molecules/ButtonSend';

const Chat = () => {
  return (
    <View style={styles.page}>
      <Header title="Jenit Anggiani" desc="Dokter Anak" type="profile" />
      <View style={styles.content}>
        <View>
          <Text style={styles.date}>Senin, 21 Maret, 2020</Text>
          <ChatItem isFromMe />
          <ChatItem />
          <ChatItem isFromMe />
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Tulis pesan untuk Jenit"
        />
        <ButtonSend isDisable={false} />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 16,
  },
  date: {
    marginTop: 20,
    fontSize: 11,
    fontFamily: fonts[400],
    color: colors.text.second,
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    marginBottom: 26,
    marginHorizontal: 16,
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.textInput.background,
    borderRadius: 10,
    padding: 14,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts[400],
    color: colors.text.first,
    maxHeight: 45,
  },
});
