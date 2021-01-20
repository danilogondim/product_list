import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ProductList from './components/ProductList';
import ProductView from './components/ProductView';

export default class App extends React.Component {


  state = {
    products: [
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
      },
      {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
      },
      {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
      }
    ],
    subtitle: 'Product List',
    focus: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Product List View</Text>
        <Text style={styles.subtitle}>{this.state.subtitle}</Text>
        <View style={styles.subContainer}>
          {!this.state.focus && <ProductList products={this.state.products} />}
          {this.state.focus && <ProductView />}
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 40
  },
  subtitle: {
    borderWidth: 1,
    padding: 15,
    borderColor: 'black',
    width: '100vw',
    backgroundColor: 'lightblue',
    fontSize: 20
  },
  subContainer: {
    borderColor: 'black',
    borderWidth: 1,
    width: '100vw',
    height: 350
  }
});
