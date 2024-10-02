import { useState } from 'react';
import { Text, View, TextInput, Pressable, Modal } from 'react-native';
import * as Speech from 'expo-speech';
import styles from './style/styles';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  //custom font
  const [loadedFont] = useFonts({
    BebasNeue: require('./assets/BebasNeue-Regular.ttf'),
  });

  if (!loadedFont) {
    return null;
  }


  const [text, setText] = useState('');
  const [isSpeaking, SetIsSpeaking] = useState(false);
  const [randomWord, setRandomWord] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // List of words to choose from for random word generation
  const words = ['apple', 'banana', 'cherry', 'dog', 'elephant', 'flower', 'giraffe'];

  // Function to generate a random word from the words array
  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];
    setRandomWord(word);
  };

  // Function to speak the input text or the random word
  const speak = () => {
    SetIsSpeaking(true);
    Speech.speak(text || randomWord, {
      onDone: () => SetIsSpeaking(false),
    }),
      setText(''); // Clear the input text after speaking
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pronunciation tester</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={text => {
            setText(text); // Update text state with input
            setRandomWord(''); // Clear random word when user types something 
          }}
          placeholder='Type here'
        />

        {/* Information icon that opens the modal with info-text */}
        <Pressable onPress={() => setModalVisible(true)}>
          <Ionicons name="information-circle-outline" size={30} color='#87184b' marginLeft={5} marginBottom={16} />
        </Pressable>
      </View>

      {/* Button to generate a random word */}
      <Pressable style={styles.generateButton} onPress={generateRandomWord}><Text style={styles.buttonText}>Generate random word</Text></Pressable>

      {/* Display the random word if it's generated */}
      {randomWord !== '' && <Text style={styles.randomWordText}>Random word: {randomWord}</Text>}

      {/* Button to speak the input or random word */}
      <Pressable style={styles.button} onPress={speak}><Text style={styles.buttonText}>Speak</Text></Pressable>

      {/* Display Lottie animation when speaking */}
      {isSpeaking && (
        <LottieView
          source={require('./assets/sound.json')}
          autoPlay
          loop
          style={{ width: 150, height: 150 }}
        />
      )}

      {/* Modal to show information about using the app */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.info}>To test the pronunciation of words,
              simply type a word in the input field and press the 'Speak'
              button or try the 'Generate Random Word' button to practice with a random word.
              Make sure your device language is set to English for the best results!
            </Text>
            <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}