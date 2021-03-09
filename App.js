import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

export default function App() {
  const [panjang, setPanjang] = useState(0);
  const [lebar, setLebar] = useState(0);
  const [tinggi, setTinggi] = useState(0);
  const [volume, setVolume] = useState(0);

  function calculateResult() {
    setVolume(panjang * lebar * tinggi);
  }

  function cekResult(panjang, lebar, tinggi) {
    return panjang * lebar * tinggi;
  }
  module.exports = cekResult;

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Menghitung Volume Balok</Text>
      <TextInput
        placeholder="Panjang"
        style={styles.input}
        onChangeText={(value) => setPanjang(value)}
        value={panjang}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Lebar"
        style={styles.input}
        onChangeText={(value) => setLebar(value)}
        value={lebar}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Tinggi"
        style={styles.input}
        onChangeText={(value) => setTinggi(value)}
        value={tinggi}
        keyboardType="numeric"
      />
      <Button style={styles.button} title="calculate!" onPress={calculateResult} />
      <Text style={styles.result}>Hasil : {volume}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    padding: 24,
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    borderBottomWidth: 1,
  },
  button: {
    margin: 100,
  },
  result: {
    marginTop: 24,
    alignSelf: 'center',
  },
});

