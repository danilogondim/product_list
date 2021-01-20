import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProductListItem extends React.Component {

  render() {

    const { item: { productName, productCode, releaseDate, price, starRating } } = this.props;

    return (
      <View style={styles.row} >
        <Text style={styles.rowItem}>{productName}</Text>
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
    borderColor: 'grey',
    borderWidth: 1
  },
  rowItem: {
    width: 120,
    height: 40,
    display: 'flex',
    alignItems: 'center'
  }
});