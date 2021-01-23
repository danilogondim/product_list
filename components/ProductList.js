import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
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
    const { products, handleFocus } = this.props;
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
          <Text style={styles.text}>Value: </Text>
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
          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false} >
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
            }).map(product => <ProductListItem key={product.productId} product={product} handleFocus={() => handleFocus(product)} style={styles.row} />)}
          </ScrollView>
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
    padding: 15,
    width: '100%',
    height: '20%'
  },
  text: {
    marginRight: 10
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
    width: '30%'
  },
  table: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    height: '80%'
  },
  header: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  headerItem: {
    width: 60,
    height: 40,
    color: 'blue',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center'
  },
  scroll: {
    width: '100%'
  }
});