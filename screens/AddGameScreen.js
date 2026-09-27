import React,{useState}from"react";

import{
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
}from"react-native";

import{colors}from"../styles/theme";

export default function AddGameScreen({onSave,onCancel})
{
  const[t,setT]=useState("");

  return (
    <View style={s.c}>
      <Text style={s.h}>
        Add Game
      </Text>

      <TextInput
        value={t}
        onChangeText={setT}
        placeholder="Game title"
        placeholderTextColor={colors.muted}
        style={s.input}
      />

      <TouchableOpacity
        style={s.primary}
        onPress={()=>t.trim()&&onSave(t.trim())}
      >
        <Text style={s.pt}>
          Save Game
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onCancel}>
        <Text style={s.cancel}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const s=StyleSheet.create({
  c:{
    padding:20,
    backgroundColor:colors.panel
  },
  h:{
    fontSize:29,
    fontWeight:"900",
    color:colors.white
  },
  input:{
    height:50,
    borderRadius:12,
    backgroundColor:colors.background,
    borderWidth:1,
    borderColor:colors.borderLight,
    paddingHorizontal:14,
    color:"#fff",
    marginTop:20
  },
  primary:{
    height:50,
    borderRadius:12,
    backgroundColor:colors.blue,
    alignItems:"center",
    justifyContent:"center",
    marginTop:24
  },
  pt:{
    color:"#fff",
    fontWeight:"900"
  },
  cancel:{
    color:colors.muted,
    textAlign:"center",
    fontWeight:"800",
    marginTop:16
  }
});
