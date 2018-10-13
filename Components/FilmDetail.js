
//imports
import React from 'react'
import {StyleSheet, View, ActivityIndicator} from 'react-native'
import {getFilmDetailFromApi} from '../API/TMDBApi'

class FilmDetail extends React.Component {
  //supercharging Methods
  constructor(props){
    this.state = {
      film: undefined,
      isLoading: true
    }
  }
  componentDidMount(){
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })

  }
//internal Methods
  _displayLoading(){
    if(this.state.isLoading){
      return(
        <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
        </View>
      )
    }
  }
//rendering
  render() {

    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
      </View>
    )
  }
}
//StyleSheet
const styles= StyleSheet.create({
  main_container:{
    flex:1,
  },
  loading_container: {
   position: 'absolute',
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
   alignItems: 'center',
   justifyContent: 'center'
 }
})

export default FilmDetail
