import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class ProductView extends React.Component {

  render() {
    const { product: { imageUrl, productName, productCode, description, releaseDate, price, starRating }, handleFocus } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View>
            <View>
              <Text>Name:</Text>
              <Text>{productName}</Text>
            </View>
            <View>
              <Text>Code:</Text>
              <Text>{productCode}</Text>
            </View>
            <View>
              <Text>Description:</Text>
              <Text>{description}</Text>
            </View>
            <View>
              <Text>Availability:</Text>
              <Text>{releaseDate}</Text>
            </View>
            <View>
              <Text>Price:</Text>
              <Text>{price}</Text>
            </View>
            <View>
              <Text>5 star rating:</Text>
              <Text>{starRating}</Text>
            </View>
          </View>
          <Image
            style={styles.img}
            source={{ uri: imageUrl }}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleFocus} style={styles.button}>
            <Text>❮ Back</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  main: {
    height: '80%',
    backgroundColor: 'grey'

  },
  img: {
    width: 60,
    height: 60
  },
  footer: {
    height: '20%',
    backgroundColor: 'salmon'
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    margin: 15,
    height: 40,
    width: 80,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4
  }
})