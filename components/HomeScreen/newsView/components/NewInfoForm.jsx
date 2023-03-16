import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React, { useContext } from "react";
import newsContext from "../../../../context/news/newsContext";
import FormStep from "../../../common/FormStep";
import { colors, getFontStyles, heightPercentageToPx, widthPercentageToPx } from "../../../../utils";
import SpecialCalendar from "../../../common/SpecialCalendar";
import GLButton from "../../../common/buttons/GLButton";

const NewInfoForm = ({ confirmInformation }) => {
  const { newForm } = useContext(newsContext);
  return (
   <ScrollView>
 <View>
      <View style={styles.titleContainer}>
        <Text style={styles.firstTitle}>Nuevo /</Text>
        <Text style={styles.secondTitle}>{newForm.type?.title}</Text>
      </View>
      <FormStep
        number={1}
        description="Ingrese fecha de inicio y fin del permiso"
      />
      <View style={{ paddingHorizontal: 10 }}>
        <SpecialCalendar
          placeholder={"Fecha inicio"}
          value={new Date()}
          onChange={() => console.log("a")}
        />
        <SpecialCalendar
          placeholder={"Fecha fin"}
          value={new Date()}
          onChange={() => console.log("a")}
        />
      </View>
      <FormStep number={2} description="dejanos un comentario..." />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.descriptionContainer}
          multiline={true}
        >
        </TextInput>
        <GLButton
          onPressAction={confirmInformation}
          type="default"
          placeholder={"Enviar solicitud"}
          width={widthPercentageToPx(70)}
        >
        </GLButton>
        <GLButton
          type="second"
          placeholder={"Cancelar "}
          width={widthPercentageToPx(70)}
        >
        </GLButton>

      </View>
    </View>
    </ScrollView>
  );
    
   
};

export default NewInfoForm;

const styles = StyleSheet.create({
  titleContainer: {
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  firstTitle: {
    fontFamily: "Poppins-Regular",
    ...getFontStyles(18, 0.5, 0.9),
  },
  secondTitle: {
    fontFamily: "Poppins-Bold",
    color: colors.mainBlue,
    ...getFontStyles(18, 0.5, 0.9),
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
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
