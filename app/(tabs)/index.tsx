import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'http://811202401.s3-website.ap-south-1.amazonaws.com/' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
