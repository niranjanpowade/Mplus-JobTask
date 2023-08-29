import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleLogin = () => {
    if (!email.trim()) {
      setEmailError("Please enter your email");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    setEmailError("");
    if (!password) {
      alert("Please enter your password");
      return;
    }
    navigation.navigate("CategoryList");
  };

  const handleRegistration = () => {
    navigation.navigate("Registration");
  };

  const isValidEmail = (email) => {
    //email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login Screen</Text>
        <TextInput
          style={[styles.input, emailError && styles.inputError]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError("");
          }}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={[
              styles.passwordInput,
              showPassword && styles.showPasswordInput,
            ]}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.registerTextContainer}>
          <Text style={styles.doNotHaveAccountText}>
            Do not have an account?{" "}
          </Text>
          <TouchableOpacity onPress={handleRegistration}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  loginContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  passwordInput: {
    flex: 1,
    color: "#333",
  },
  showPasswordInput: {
    marginRight: 30,
  },
  showPasswordButton: {
    padding: 8,
  },
  button: {
    backgroundColor: "#007BFF",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerTextContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  doNotHaveAccountText: {
    color: "#333",
    fontSize: 16,
  },
  registerLink: {
    color: "#007BFF",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
