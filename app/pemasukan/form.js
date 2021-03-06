/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Content,
  Container,
  Header,
  Card,
  CardItem,
  Body,
  Text,
  Item,
  Input,
  Button
} from 'native-base'
export default class MyComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Form Pemasukan',
    headerStyle:{ backgroundColor: '#32a96f'},
    headerTintColor : '#fff',
  });
  onButtonSubmit(){

  }
  render() {
    return (
      <Container>
          <Content>
            <Card>
              <CardItem>
                <Item regular>
                  <Input placeholder='Sumber' />
                </Item>
              </CardItem>
              <CardItem>
                <Item regular>
                  <Input placeholder='Total'/>
                </Item>
              </CardItem>
              <CardItem>
                <Item regular>
                  <Input placeholder='Unit'/>
                </Item>
              </CardItem>
              <CardItem>
                <Item regular>
                  <Input placeholder='Pendapatan' />
                </Item>
              </CardItem>
              <CardItem>
                <Item regular>
                  <Input placeholder='Date'/>
                </Item>
              </CardItem>
              <CardItem>
                <Button onPress={this.onButtonSubmit.bind(this)} block>
                  <Text>
                    Simpan
                  </Text>
                </Button>
              </CardItem>
            </Card>


          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
