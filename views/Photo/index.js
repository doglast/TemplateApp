import React from 'react';
import {SafeAreaView} from 'react-native';
import Search from '../../components/Search';
import Card from '../../components/Card';
import { dummyData } from '../../data/Data';


const Photo = ({ navigation }) =>{
  return(
    <SafeAreaView>
      <Search/>
      <Card data ={dummyData}/>
    </SafeAreaView>
  );
};

export default Photo;