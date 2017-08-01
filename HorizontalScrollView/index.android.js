/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window')
const contentsArr = [
  { text: '1번째 화면', backgroundColor: 'red' },
  { text: '2번째 화면', backgroundColor: 'blue'},
  { text: '3번째 화면', backgroundColor: 'green'} ]

export default class HorizontalScrollView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {{height: 300}}>
        <ScrollView
          style ={styles.horizontalScroll}
          horizontal = {true}
          pagingEnabled = {true}
          showsHorizontalScrollIndicator = {false}
          >

          { contentsArr.map( (content, idx) => (
            <ContentsView key = {idx} text = {content.text} backgroundColor = {content.backgroundColor}/>)
          ) }

        </ScrollView>
        </View>
      </View>
    );
  }
}

const ContentsView = props => (
  <View style = {[styles.contentsView, {backgroundColor: props.backgroundColor}]}>
    <Text>
      {props.text}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  horizontalScroll: {
    flex: 1,
    backgroundColor: 'skyblue',
    width: width

    // 스크롤의 width길이는 해상도의 width와 동일,
    // ScrollView 안의 콘텐츠뷰의 길이가 ScrollView의 width 보다 길어야 스크롤링이 가능

  },
  contentsView: {
    width: width, // 한 개의 콘텐츠 뷰의 width길이는 해상도의 width와 동일
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('HorizontalScrollView', () => HorizontalScrollView);
