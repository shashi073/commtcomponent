import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import CommentBox from './components/Comments';
import Comments from './components/Comments2';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <CommentBox />
        <Comments />
      </View>
     );
  }
}