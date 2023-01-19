import React, { Component } from 'react';
import ViewSwiper from 'react-native-swiper';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  useWindowDimensions,
} from 'react-native';

class Home extends React.Component {
  static navigationOptions({ navigation }) {
    return {
      headerTitle: (
        <TouchableHighlight underlayColor="transparent">
          <>
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: 'rgba(0, 0, 0, .9)',
                textAlign: 'center',
                marginHorizontal: 0,
              }}>
              User
            </Text>
          </>
        </TouchableHighlight>
      ),
      headerRight: null,
      tabBarVisible: false,
      headerStyle: {
        elevation: 0,
      },
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Image resizeMode='cover' style={styles.image} source={{uri: 'https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF'}} />
          <Text>User name</Text>
        </View>
        <View>
          <Text>Personal introduction...</Text>
          <Text>Personal introduction...</Text>
          <Text>Personal introduction...</Text>
          <Text>Personal introduction...</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    padding: 15
  },
  row: {
    marginTop: 50,
    marginBottom: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginBottom: 15,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 10
  }
};

module.exports = Home;
