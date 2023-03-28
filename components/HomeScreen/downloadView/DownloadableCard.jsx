import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, getFontStyles, heightPercentageToPx } from "../../../utils";

import Toast from "react-native-toast-message";

const DownloadableCard = ({ title, desc, image, id }) => {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Descarga Completada",

      position: "bottom",
      visibilityTime: 2000,
    });
  };
  return (
    <View style={styles.scrollStyle}>
      <View>
        <View style={styles.imageSvg}>{image}</View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{desc}</Text>
        <Pressable onPress={showToast}>
          <View style={styles.downloadButton}>
            <Text style={{ color: colors.light, fontFamily: "Volks-Bold" }}>
              Descargar
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default DownloadableCard;

const styles = StyleSheet.create({
  scrollStyle: {
    width: 180,
    backgroundColor: colors.white,
    borderRadius: 17,
    paddingHorizontal: 25,
    paddingVertical: 25,
    alignItems: "flex-start",
    flexDirection: "column",
  },
  certificadoImage: {
    marginBottom: 10,
    height: 80,
    width: 80,
  },
  imageSvg: {
    marginBottom: 15,
  },
  title: {
    ...getFontStyles(15, 0.9, 1.1),
    fontFamily: "Poppins-Bold",
    marginBottom: 5,
  },
  description: {
    fontFamily: "Volks-Serial-Light",
    color: colors.descriptionColors,
    ...getFontStyles(12, 0.9, 1.2),
    flex: 1,
  },
  downloadButton: {
    backgroundColor: colors.buttonsColor,
    fontFamily: "Volks-Bold",
    height: 41,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginTop: 0,
    padding: 0,
    flex: 0,
  },
});
