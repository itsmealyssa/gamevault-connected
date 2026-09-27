import React from "react";

import{
  ScrollView,
  Text,
  StyleSheet
}from"react-native";

import{BigStat}from"../components/StatCard";
import{colors}from"../styles/theme";

export default function StatsScreen({games})
{
  const d=games.filter(g=>g.status==="Completed").length,
  p=games.filter(g=>g.status==="Playing"||g.status==="In Progress").length,
  h=games.reduce((a,g)=>a+g.hours,0),
  r=games.length?Math.round(d/games.length*100):0;

  return (
    <ScrollView contentContainerStyle={s.page}>
      <Text style={s.h}>
        Statistics
      </Text>

      <Text style={s.m}>
        Your gaming journey
      </Text>

      <BigStat
        number={games.length}
        label="Games owned"
      />

      <BigStat
        number={`${d}/${games.length}`}
        label="Story completed"
      />

      <BigStat
        number={`${r}%`}
        label="Completion rate"
      />

      <BigStat
        number={h}
        label="Total gaming hours"
      />

      <BigStat
        number={p}
        label="Currently playing"
      />
    </ScrollView>
  )
};

const s=StyleSheet.create({
  page:{
    padding:20,
    paddingBottom:110
  },
  h:{
    fontSize:29,
    fontWeight:"900",
    color:colors.white
  },
  m:{
    color:colors.muted,
    fontSize:12,
    marginTop:4
  }
});
