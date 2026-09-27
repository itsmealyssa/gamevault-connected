import React from'react';

import{
  View,
  Text,
  StyleSheet
}from'react-native';

import{colors}from'../styles/theme';

export function StatCard({number,label})
{
  return (
    <View style={s.stat}>
      <Text style={s.n}>
        {number}
      </Text>

      <Text style={s.l}>
        {label}
      </Text>
    </View>
  )
}

export function BigStat({number,label})
{
  return (
    <View style={s.big}>
      <Text style={s.bn}>
        {number}
      </Text>

      <Text style={s.m}>
        {label}
      </Text>
    </View>
  )
}

const s=StyleSheet.create({
  stat:{
    flex:1,
    alignItems:'center',
    borderRightWidth:1,
    borderRightColor:colors.border
  },
  n:{
    fontSize:20,
    fontWeight:'900',
    color:colors.white
  },
  l:{
    fontSize:8,
    letterSpacing:1,
    color:colors.muted,
    marginTop:3
  },
  big:{
    marginTop:16,
    padding:20,
    borderRadius:16,
    backgroundColor:colors.panel,
    borderWidth:1,
    borderColor:colors.border
  },
  bn:{
    fontSize:32,
    fontWeight:'900',
    color:colors.white
  },
  m:{
    color:colors.muted,
    fontSize:12,
    marginTop:4
  }
});
