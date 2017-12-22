/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
    ListView,
  StyleSheet,
  Slider,
  Text,
  View,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}); 

class SliderExample extends React.Component {
  static defaultProps = {
    value: 0,
  };

  state = {
    value: this.props.value,
  };

  render() {
    return (
        <View>
          <Text style={styles.text} >
            {this.state.value && +this.state.value.toFixed(3)}
          </Text>
          <Slider
              {...this.props}
              onValueChange={(value) => this.setState({value: value})} />
        </View>
    );
  }
}
/*  <SliderExample value={1} />*/

class Logo extends Component{
  render(){
    return (
        <Image source={require('./shared_components/images/logo1.png')}
               style={{flex:0,width:40,height:40}}
        />
    );
  }
}
class MainFood extends Component {
  render() {
    let pic = {
      uri: 'http://52.33.102.24/eat/wp-content/uploads/2016/10/matcha-chia2-770x485.jpg'
    };
    return (
        <Image source={pic} style={{flex:2}}/>
    );
  }
}
class ListViewIngredients extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        '1 large butternut squash, peeled and cut into 1" chunks',
        '3 tbsp. olive oil',
        '1/2 c. raw shelled pumpkin seeds, plus more for garnish',
        '1/2 tsp. cumin seeds',
        '1/2 tsp. dried oregano',
        '1/2 onion, cut into wedges',
        '2 tomatillos, husked and halved',
        '2 cloves garlic, halved',
        '1 jalapeno chile, sliced',
        '3/4 c. vegetable stock',
        '1/2 c. coconut milk',
        '1/2 c. parsley, chopped',
        '1/4 c. packed cilantro, chopped, plus more for garnish',
        'Lime wedges, for garnish',
        'Cooked rice, for serving',
      ])
    };
  }
  render() {
    return (
        <View style={{flex: 1, paddingTop: 15}}>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>
    );
  }
}
class ListViewDirections extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Preheat oven to 400 degrees F. Toss squash with 2 tablespoons olive oil, 1 teaspoon salt, and 1/4 teaspoon pepper. Arrange on baking sheet; roast 35 to 40 minutes or until squash is tender, stirring occasionally.',
        'Meanwhile, in 10" skillet, toast pumpkin seeds, cumin seed and oregano on medium 3 minutes or until fragrant, stirring. Remove from heat; set aside. In same skillet, heat remaining 1 tablespoon olive oil on medium. Add onion, tomatillos, garlic and jalapeno; cook 5 minutes or until slightly browned. Place vegetables, pumpkin seeds and spice mixture in blender or food processor. Pulse a few times; then add stock, coconut milk, parsley, cilantro, 3/4 teaspoon salt and 1/4 teaspoon pepper. Process until smooth. Makes 3 cups.',
        'Return mixture to skillet; simmer on medium stirring often, 15 to 20 minutes or until slightly thickened. Divide rice and squash among 4 bowls; dollop with sauce. Serve remaining sauce on the side. Garnish with cilantro and lime wedges.'
      ])
    };
  }
  render() {
    return (
        <View style={{flex: 1, paddingTop:15}}>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>
    );
  }
}

class BellaVirtueProject extends Component {
  render() {
    return (<View style={{ flex: 1}}>

       <View style={{backgroundColor: 'powderblue', height:35}}>
         <Text style={{color:'steelblue',fontSize:25}}>BellaVirtue</Text>
       </View>



        <ScrollView style={{flex: 1,padding:10,marginBottom:5}}>
          <MainFood/>

          <Text style={{color:'steelblue',marginTop:20,fontSize:25}}>Ingredients</Text>
          <ListViewIngredients/>

          <Text style={{color:'steelblue',marginTop:20,fontSize:25}}>Directions</Text>
          <ListViewDirections/>
        </ScrollView>


      <View style={{backgroundColor: 'steelblue', height:10}}/>

    </View>);
  }
}
/**
 * <View style={{flex:3,
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'skyblue'}} >
 </View>
 */
/* <View style={{flex: 3, flexDirection: 'row'}}>
 <Logo/>
 </View>*/
AppRegistry.registerComponent('BellaVirtueProject', () => BellaVirtueProject);
