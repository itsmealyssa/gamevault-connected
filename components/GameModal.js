import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import { colors } from "../styles/theme";

export default function GameModal({
  game,
  onClose,
  onUpdateStatus,
}) {
  return (
    <Modal
      visible={!!game}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.close}>×</Text>
          </TouchableOpacity>

          {game && (
            <>
              {game.cover && (
                <Image
                  source={game.cover}
                  style={styles.cover}
                />
              )}

              <Text style={styles.title}>
                {game.title}
              </Text>

              <Text style={styles.muted}>
                {game.platform} · {game.hours} hours
              </Text>

              <Text style={styles.label}>
                STORY PROGRESS
              </Text>

              <View style={styles.progress}>
                <View
                  style={[
                    styles.progressOn,
                    {
                      width: `${game.progress}%`,
                    },
                  ]}
                />
              </View>

              <Text style={styles.progressText}>
                {game.progress}% · {game.status}
              </Text>

              <Text style={styles.label}>
                MY RATING
              </Text>

              <Text style={styles.rating}>
                {game.rating
                  ? `★ ${game.rating}/5`
                  : "Not rated"}
              </Text>

              <TouchableOpacity
                style={styles.primary}
                onPress={onUpdateStatus}
              >
                <Text style={styles.primaryText}>
                  Update Story Status
                </Text>
              </TouchableOpacity>
            </>
          )}

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.72)",
    justifyContent: "flex-end",
  },

  modal: {
    backgroundColor: colors.panel,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    minHeight: 330,
  },

  close: {
    color: colors.muted,
    fontSize: 30,
    textAlign: "right",
  },

  cover: {
    width: 80,
    height: 105,
    borderRadius: 10,
    marginBottom: 12,
  },

  title: {
    fontSize: 29,
    fontWeight: "900",
    color: colors.white,
  },

  muted: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 4,
  },

  label: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.3,
    marginTop: 22,
  },

  progress: {
    height: 10,
    backgroundColor: "#1d293c",
    borderRadius: 7,
    overflow: "hidden",
    marginTop: 8,
  },

  progressOn: {
    height: "100%",
    backgroundColor: colors.blue,
  },

  progressText: {
    color: colors.text,
    fontSize: 12,
    marginTop: 6,
  },

  rating: {
    color: colors.yellow,
    fontSize: 23,
    fontWeight: "900",
    marginTop: 8,
  },

  primary: {
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },

  primaryText: {
    color: "#fff",
    fontWeight: "900",
  },
});