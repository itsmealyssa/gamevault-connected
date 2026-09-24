import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Platform,
} from "react-native";

import { initialGames } from "./data/games";

import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import GameModal from "./components/GameModal";

import CollectionScreen from "./screens/CollectionScreen";
import BacklogScreen from "./screens/BacklogScreen";
import StatsScreen from "./screens/StatsScreen";
import StoresScreen from "./screens/StoresScreen";
import AddGameScreen from "./screens/AddGameScreen";

import { colors } from "./styles/theme";

export default function App() {
  const [games, setGames] = useState(initialGames);
  const [screen, setScreen] = useState("Collection");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [addGame, setAddGame] = useState(false);
  const [connected, setConnected] = useState({});

  function updateStatus(id) {
    setGames((current) =>
      current.map((game) => {
        if (game.id !== id) return game;

        const statuses = [
          "Backlog",
          "In Progress",
          "Completed",
        ];

        const currentStatus =
          game.status === "Playing"
            ? "In Progress"
            : game.status;

        const index =
          statuses.indexOf(currentStatus);

        const next =
          statuses[(index + 1) % statuses.length];

        return {
          ...game,
          status: next,
          progress:
            next === "Completed"
              ? 100
              : game.progress,
        };
      })
    );
  }

  function createGame(title) {
    const newGame = {
      id: Date.now().toString(),
      title: title,
      platform: "Steam",
      status: "Backlog",
      progress: 0,
      rating: 0,
      hours: 0,
      cover: null,
    };

    setGames((current) => [
      newGame,
      ...current,
    ]);

    setAddGame(false);
  }

  function renderScreen() {
    if (screen === "Collection") {
      return (
        <CollectionScreen
          games={games}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
          onSelect={setSelected}
        />
      );
    }

    if (screen === "Backlog") {
      return (
        <BacklogScreen
          games={games}
          onSelect={setSelected}
        />
      );
    }

    if (screen === "Stats") {
      return <StatsScreen games={games} />;
    }

    if (screen === "Stores") {
      return (
        <StoresScreen
          connected={connected}
          setConnected={setConnected}
        />
      );
    }

    return null;
  }

  return (
    <SafeAreaView
      style={[
        styles.safe,
        {
          paddingTop:
            Platform.OS === "android"
              ? StatusBar.currentHeight || 0
              : 0,
        },
      ]}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.background}
        translucent={false}
      />

      <Header
        onAdd={() => setAddGame(true)}
      />

      <View style={styles.content}>
        {renderScreen()}
      </View>

      <BottomNav
        screen={screen}
        setScreen={setScreen}
      />

      <GameModal
        game={selected}
        onClose={() => setSelected(null)}
        onUpdateStatus={() => {
          if (selected) {
            updateStatus(selected.id);
            setSelected(null);
          }
        }}
      />

      {addGame && (
        <View style={styles.overlay}>
          <View style={styles.addModal}>
            <AddGameScreen
              onSave={createGame}
              onCancel={() =>
                setAddGame(false)
              }
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.72)",
    justifyContent: "flex-end",
  },

  addModal: {
    backgroundColor: colors.panel,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: 330,
    overflow: "hidden",
  },
});