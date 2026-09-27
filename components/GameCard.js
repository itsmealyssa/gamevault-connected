import React from'react';
import{
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
}from'react-native';

import{colors}from'../styles/theme';

export default function GameCard({game,onPress})
{
  return (
    <View style={s.c}>
      <TouchableOpacity
        onPress={onPress}
        style={s.g}
      >
        <Image
          source={game.cover}
          style={s.cover}
        />

        <View style={s.info}>
          <Text style={s.title}>
            {game.title}
          </Text>

          <Text style={s.m}>
            {game.platform} · {game.hours}h
          </Text>

          <View style={s.line}>
            <View
              style={[
                s.p,
                {width:`${game.progress}%`}
              ]}
            />
          </View>

          <View style={s.b}>
            <Text style={s.st}>
              {game.status}
            </Text>

            <Text style={s.r}>
              {game.rating?`★ ${game.rating}`:'Not rated'}
            </Text>
          </View>
        </View>

        <Text style={s.a}>›</Text>
      </TouchableOpacity>
    </View>
  )
}

const s=StyleSheet.create({
  c:{
    backgroundColor:colors.panel,
    borderWidth:1,
    borderColor:colors.border,
    borderRadius:15,
    padding:11,
    marginBottom:10
  },
  g:{
    flexDirection:'row',
    alignItems:'center',
    gap:11
  },
  cover:{
    width:56,
    height:70,
    borderRadius:9,
    backgroundColor:'#18304d'
  },
  info:{
    flex:1
  },
  title:{
    fontSize:14,
    color:colors.white,
    fontWeight:'800'
  },
  m:{
    color:colors.muted,
    fontSize:12,
    marginTop:4
  },
  line:{
    width:'55%',
    height:5,
    backgroundColor:'#1d293c',
    borderRadius:4,
    overflow:'hidden',
    marginVertical:8
  },
  p:{
    height:'100%',
    backgroundColor:colors.blue
  },
  b:{
    flexDirection:'row',
    alignItems:'center',
    gap:8
  },
  st:{
    fontSize:10,
    color:colors.text,
    backgroundColor:'#172338',
    paddingHorizontal:7,
    paddingVertical:4,
    borderRadius:6
  },
  r:{
    fontSize:10,
    color:colors.yellow
  },
  a:{
    fontSize:27,
    color:'#475569'
  }
});
