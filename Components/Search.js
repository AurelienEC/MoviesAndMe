import React from 'react'
import {View, Button, TextInput} from 'react-native'

class Search extends React.Component {
  render(){
    return(
      <View>
        <TextInput placeholder="Titre du Film"/>
        <Button title="Rechercher" onPress={()=>{}} />
      </View>
    )
  }
}

export default Search