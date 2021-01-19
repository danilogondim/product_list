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
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  rowItem: {
    flex: 1,
    alignSelf: 'stretch'
  }
});