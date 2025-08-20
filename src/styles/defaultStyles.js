import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  image1: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 30,
    textAlign: "center",
  },

  button1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingVertical: 12,
    width: "100%",
    marginBottom: 12,
  },

  button2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingVertical: 12,
    width: "100%",
    marginBottom: 20,
  },

  image2: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: "contain",
  },

  image3: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: "contain",
  },

  text: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
    textAlign: "center",
  },

  button3: {
    backgroundColor: "#28a745", // verde principal
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    elevation: 3, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  textbutton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
