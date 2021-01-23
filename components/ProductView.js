import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class ProductView extends React.Component {

  render() {
    const { product: { imageUrl, productName, productCode, description, releaseDate, price, starRating }, handleFocus } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text style={styles.infoItem}>Name: </Text>
              <Text style={styles.infoItem}>{productName}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoItem}>Code: </Text>
              <Text style={styles.infoItem}>{productCode}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoItem}>Description: </Text>
              <Text style={styles.infoItem}>{description}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoItem}>Availability: </Text>
              <Text style={styles.infoItem}>{releaseDate}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoItem}>Price: </Text>
              <Text style={styles.infoItem}>{price}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoItem}>5 star rating: </Text>
              <Text style={styles.infoItem}>{starRating}</Text>
            </View>
          </View>
          <Image
            style={styles.img}
            source={{ uri: imageUrl }}
            resizeMode="contain"
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
    flexDirection: 'row',
    height: '80%'
  },
  infoContainer: {
    padding: 20,
    width: '60%'
  },
  info: {
    flexDirection: 'row',
    marginBottom: 5
  },
  infoItem: {
    width: '50%'
  },
  img: {
    width: '30%',
  },
  footer: {
    height: '20%',
    backgroundColor: 'lightgrey',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 15,
    height: 40,
    width: 80,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4
  }
})