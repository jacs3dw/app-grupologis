import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  colors,
  notificationInfo,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";
import NotCard from "./NotificationCard";

const NotificationForm = ({ closeM }) => {
  return (
    <View styles={styles.modalnForm}>
      <Pressable onPress={closeM}>
        <View style={styles.goBackButton}>
          <Feather name="x" size={24} color={colors.purpleIcons} />
        </View>
      </Pressable>
      <View style={styles.titlesContainer}>
        <Text style={styles.subtitle}>Notificaciones</Text>
      </View>
      <View styles={styles.inputContainer}>
        {notificationInfo.map((e) => (
          <NotCard
            descNot={e.description}
            titleNot={e.title}
            id={e.id}
            imageNot={e.image}
          />
        ))}
      </View>
    </View>
  );
};

export default NotificationForm;

const styles = StyleSheet.create({
  modalnForm: {
    top: 45,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    transform: [{ translateY: 50 }],
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(90),
  },
  goBackButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    height: 30,
    width: 30,
  },
  titlesContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontFamily: "Poppins-Bold",
    marginBottom: 2,
    marginTop: 2,
    color: colors.mainBlue,
    ...getFontStyles(30),
  },
  subtitle: {
    ...getFontStyles(17),
    marginBottom: 2,
    marginTop: 20,
    fontFamily: "Poppins-Bold",
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    marginBottom: 15,
    marginTop: 15,
    ...getFontStyles(13, 0.5, 0.9),
  },

  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  titleContainer: {
    backgroundColor: colors.mainBackgroundColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: widthPercentageToPx(70),
    fontFamily: "Poppins-Regular",
    height: 50,
    borderRadius: 17,
    padding: 15,
  },
  descriptionContainer: {
    backgroundColor: colors.mainBackgroundColor,
    width: widthPercentageToPx(70),
    fontFamily: "Poppins-Regular",
    height: heightPercentageToPx(20),
    borderRadius: 17,
    padding: 15,
    display: "flex",
    alignItems: "flex-start",
  },
  sendButton: {
    backgroundColor: colors.buttonsColor,
    fontFamily: "Poppins-Regular",
    width: widthPercentageToPx(70),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    height: 50,
    marginTop: 15,
  },
});
