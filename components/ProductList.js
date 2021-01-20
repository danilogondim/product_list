import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ProductListItem from './ProductListItem';

class ProductList extends React.Component {

  state = {
    filterBy: '',
    filter: '',
  }
  handleFilterBy = (text) => {
    this.setState({ filterBy: text })
  }
  handleFilter = (text) => {
    this.setState({ filter: text })
  }

  render() {
    const { products } = this.props;
    const filterBy = this.state.filterBy.toLowerCase();
    const filter = this.state.filter.toLowerCase();
    const filterMap = {
      "product": "productName",
      "code": "productCode",
      "available": "releaseDate",
      "price": "price",
      "5 star rating": "starRating",
      "rating": "starRating",
    }

    return (
      <>
        <View style={styles.filterContainer}>
          <Text style={styles.text}>Filter by: </Text>
          <TextInput onChangeText={this.handleFilterBy} style={styles.input}></TextInput>
          <TextInput onChangeText={this.handleFilter} style={styles.input}></TextInput>
        </View>

        <View style={styles.table} >
          <View style={styles.header} >
            <Text style={styles.headerItem}>Product</Text>
            <Text style={styles.headerItem}>Code</Text>
            <Text style={styles.headerItem}>Available</Text>
            <Text style={styles.headerItem}>Price</Text>
            <Text style={styles.headerItem}>5 Star Rating</Text>
          </View>
          {products.filter(product => {
            const applicableFilter = filterMap[filterBy];
            // no filter applied if the user did not type a valid value
            if (applicableFilter) {
              const productFound = products.find(product => {
                if (typeof product[filterMap[filterBy]] === 'number') {
                  return product[filterMap[filterBy]] === Number(filter)
                } else
                return product[filterMap[filterBy]].toLowerCase() === filter
              });
              // make sure the filter will only be applied if there is at least one product matching the criteria
              if (productFound) {
                return product === productFound;
              }
            }
            // if there is no applicable filter or if there is no product matching the criteria, render all products
            return true;
          }).map((item, index) => <ProductListItem key={item.productId} item={item} style={styles.row} />)}
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
  header: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  headerItem: {
    width: 120,
    height: 40,
    color: 'blue',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center'
  }
});