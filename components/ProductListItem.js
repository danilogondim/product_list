import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProductListItem extends React.Component {

  render() {

    const { product: { productName, productCode, releaseDate, price, starRating }, handleFocus } = this.props;

    return (
      <View style={styles.row} >
        <Text onPress={handleFocus} style={styles.link}>{productName}</Text>
        <Text style={styles.rowItem}>{productCode}</Text>
        <Text style={styles.rowItem}>{releaseDate}</Text>
        <Text style={styles.rowItem}>{price}</Text>
        <Text style={styles.rowItem}>{starRating}</Text>
      </View>
    )
  }
}

export default ProductListItem;

const styles = StyleSheet.create({
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopColor: 'grey',
    borderTopWidth: 1
  },
  rowItem: {
    width: 120,
    height: 40,
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    width: 120,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    color: 'blue'
  }
});