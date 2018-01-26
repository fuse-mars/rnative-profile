import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

import { LinearGradient, WebBrowser } from 'expo';

import { Colors, Fonts, Images } from '../constants';
import RoundedButton from './RoundedButton';

export class SlackBanner extends React.PureComponent {
  render() {
    return (
      <LinearGradient
        colors={['#136EB5', 'rgba(1,192,182,0.88)']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={slackStyles.container}>
        <Image style={slackStyles.icon} source={Images.logo} />
        <Text style={slackStyles.heading}>Login</Text>
        <RoundedButton
          text="Facebook"
          onPress={() => {
            WebBrowser.openBrowserAsync('http://community.infinite.red');
          }}
          style={slackStyles.button}
        />
      </LinearGradient>
    );
  }
}

export class TwitterBanner extends React.PureComponent {
  render() {
    return (
      <View style={twitterStyles.container}>
        <Image style={twitterStyles.blowhorn} source={Images.blowhorn} />
        <TouchableOpacity onPress={this._tweetWithHashtag}>
          <Text style={twitterStyles.heading}>#rnp</Text>
        </TouchableOpacity>
        <Text style={twitterStyles.description}>Your React Native Profile</Text>
      </View>
    );
  }

  _tweetWithHashtag = async () => {
    const appURL = 'twitter://post?hashtags=ChainReact2017';
    const webURL = 'https://twitter.com/intent/tweet?hashtags=ChainReact2017';
    try {
      await Linking.openURL(appURL);
    } catch (err) {
      WebBrowser.openBrowserAsync(webURL);
    }
  };
}

export class AddQuestionForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={addQuestionFormStyles.container}>
        <View style={{ padding: 3 }}>
          <TextInput
            style={[addQuestionFormStyles.heading, { height: 160 }]}
            placeholder="New question ..."
            multiline={true}
            placeholderTextColor="#AAAAAA"
            selectionColor="#FFFFFF"
            onChangeText={text => this.setState({ text })}
          />
        </View>

        {/* <TouchableOpacity onPress={this._tweetWithHashtag}>
          <Text style={twitterStyles.heading}>Please login first!</Text>
        </TouchableOpacity> */}
        {/* <Text style={twitterStyles.description}>Please login first!</Text> */}

        <RoundedButton
          text="Submit"
          onPress={() => {
            WebBrowser.openBrowserAsync('http://community.infinite.red');
          }}
          style={slackStyles.button}
        />
      </View>
    );
  }

  _tweetWithHashtag = async () => {
    const appURL = 'twitter://post?hashtags=ChainReact2017';
    const webURL = 'https://twitter.com/intent/tweet?hashtags=ChainReact2017';
    try {
      await Linking.openURL(appURL);
    } catch (err) {
      WebBrowser.openBrowserAsync(webURL);
    }
  };
}

const slackStyles = StyleSheet.create({
  heading: {
    marginTop: 14,
    fontFamily: Fonts.type.bold,
    fontSize: 31,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: Colors.snow,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55,
    paddingBottom: 35,
  },
  button: {
    marginTop: 25,
  },
});

const twitterStyles = StyleSheet.create({
  heading: {
    marginTop: 14,
    fontFamily: Fonts.type.bold,
    fontSize: 31,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: Colors.snow,
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: '#FDE5FF',
    letterSpacing: 0.47,
    lineHeight: 23,
  },
  hashtag: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.snow,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: Colors.transparent,
  },
});

const addQuestionFormStyles = StyleSheet.create({
  heading: {
    marginTop: 44,
    fontFamily: Fonts.type.bold,
    fontSize: 31,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: Colors.snow,
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: '#FDE5FF',
    letterSpacing: 0.47,
    lineHeight: 23,
  },
  hashtag: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.snow,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: Colors.transparent,
  },
});
