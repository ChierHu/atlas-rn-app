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
              Discover
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

    this.state = {
      rows: [
        {
          image: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF',
          text: 'image'
        },
        {
          image: 'https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF',
          text: 'image'
        },
        {
          image: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF',
          text: 'image'
        },
        {
          image: 'https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF',
          text: 'image'
        },
        {
          image: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF',
          text: 'image'
        },
        {
          image: 'https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF',
          text: 'image'
        },
        {
          image: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF',
          text: 'image'
        },
        {
          image: 'https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF',
          text: 'image'
        },
      ]
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.state.rows.map((item, key) => {
            return (
              <View style={styles.row}>
                <Image resizeMode='cover' style={styles.image} source={{uri: item.image}} />
                <Text style={styles.text}>{ item.text } { key + 1 }</Text>
                <Ionicons name="chevron-forward-outline" color='grey' size={20} />
              </View>
            )
          })
        }
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    padding: 15
  },
  row: {
    backgroundColor: '#FFF',
    overflow: 'hidden',
    borderRadius: 0,
    marginBottom: 15,
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60,
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
