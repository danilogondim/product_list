import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ProductListItem from './ProductListItem';

class ProductList extends React.Component {

  render() {
    return (
      <>
        <View style={styles.filterContainer}>
          <Text style={styles.text}>Filter by: </Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.table} >{
          this.props.products.map((item, index) => <ProductListItem key={item.productId} item={item} style={styles.row} />)}
        </View>
      </>

    )
  }
}

export default ProductList;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 15
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 15,
    width: 150
  },
  table: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});