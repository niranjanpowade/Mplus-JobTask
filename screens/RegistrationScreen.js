import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = () => {
    if (!email.trim()) {
      setEmailError("Please enter your email");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    if (!password) {
      setPasswordError("Please enter your password");
      return;
    }
    if (!fullName.trim()) {
      setFullNameError("Please enter your full name");
      return;
    }
    if (!phoneNumber.trim()) {
      setPhoneNumberError("Please enter your phone number");
      return;
    }
    setRegistrationSuccess(true);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.registrationContainer}>
        <Text style={styles.title}>Registration Screen</Text>
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

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.passwordInput, passwordError && styles.inputError]}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError("");
            }}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Feather name={showPassword ? "eye" : "eye-off"} size={20} />
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <TextInput
          style={[styles.input, fullNameError && styles.inputError]}
          placeholder="Full Name"
          value={fullName}
          onChangeText={(text) => {
            setFullName(text);
            setFullNameError("");
          }}
        />
        {fullNameError ? (
          <Text style={styles.errorText}>{fullNameError}</Text>
        ) : null}

        <View style={styles.phoneContainer}>
          <Text style={styles.phoneCode}>+91</Text>
          <TextInput
            style={[styles.phoneInput, phoneNumberError && styles.inputError]}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text.replace(/[^0-9]/g, ""));
              setPhoneNumberError("");
            }}
          />
        </View>
        {phoneNumberError ? (
          <Text style={styles.errorText}>{phoneNumberError}</Text>
        ) : null}

        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.registerTextContainer}>
          <Text style={styles.alreadyhaveanaccount}>
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.registerLink}>Login</Text>
          </TouchableOpacity>
        </View>
        {registrationSuccess ? (
          <Text style={styles.successText}>Registration Successful!</Text>
        ) : null}
      </View>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  registrationContainer: {
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
    fontSize: 14,
    marginBottom: 5,
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
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  phoneCode: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
    color: "#333",
  },
  phoneInput: {
    flex: 1,
    color: "#333",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  passwordInput: {
    flex: 1,
    color: "#333",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  successText: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  registerTextContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  alreadyhaveanaccount: {
    color: "#333",
    fontSize: 16,
  },
  registerLink: {
    color: "#007BFF",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
