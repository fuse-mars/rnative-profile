import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import Colors from '../constants/Colors';
import Images from '../constants/Images';
import { Ionicons } from '@expo/vector-icons';

@withNavigation
export default class ProfileButton extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={[styles.backButton, this.props.style]}
        hitSlop={{ top: 40, left: 40, right: 30, bottom: 30 }}
        onPress={this.props.onPress || this._toggleProfile}>
        <Text style={styles.backButtonText}>
          <Ionicons name="ios-person" size={32} color="white" />
        </Text>
      </TouchableOpacity>
    );
  }

  _toggleProfile = () => {
    // this.props.navigation.goBack();
    this.props.toggleProfile();
  }

}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonIcon: {
    marginRight: 5,
  },
  backButtonText: {
    fontFamily: 'Montserrat-Light',
    fontSize: 17,
    letterSpacing: 0,
    backgroundColor: Colors.transparent,
    color: 'rgba(255,255,255,0.80)',
  },
});
