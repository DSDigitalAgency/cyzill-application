import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from '../../assets/themes/theme';

const MenuScreen = ({ navigation }) => {

  const ProfileDetailsPress = () => {
    navigation.navigate('Profile');
  };
  const SavedPress = () => {
    navigation.navigate('Saved');
  };
  const ContactUsPress = () => {
    navigation.navigate('Contact Us');
  };
  const FaqPress = () => {
    navigation.navigate("FAQ's");
  };
  const TermsofServicesPress = () => {
    navigation.navigate('Terms of Services');
  };
  const PrivacyPolicyPress = () => {
    navigation.navigate('Privacy Policy')
  };
  const FairUsePress = () => {
    navigation.navigate('Fair Use');
  };
  const AboutUsPress = () => {
    navigation.navigate('About Us');
  };

  return (
      <ScrollView style={styles.container}>
        <View style={styles.topsection}>
            <Text style={styles.title}>Menu</Text>
        </View>
      <View style={styles.contentcontainer}>
        <View style={styles.containerbox}>
          <TouchableOpacity onPress={ProfileDetailsPress} style={styles.containerboxcontent}>
            <Icon name='user' style={styles.iconcontent} />
            <Text style={styles.contenttext}>Profile Details</Text>
            <Icon name="caret-right" style={styles.contenticon} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbox}>
          <TouchableOpacity onPress={SavedPress} style={styles.containerboxcontent}>
            <Icon name='heart' style={styles.iconcontent} />
            <Text style={styles.contenttext}>Saved</Text>
            <Icon name="caret-right" style={styles.contenticon} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbox}>
          <TouchableOpacity onPress={FaqPress} style={styles.containerboxcontent}>
            <Icon name='comments-o' style={styles.iconcontent} />
            <Text style={styles.contenttext}>FAQ's</Text>
            <Icon name="caret-right" style={styles.contenticon} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbox}>
          <TouchableOpacity onPress={TermsofServicesPress} style={styles.containerboxcontent}>
          <Icon name='exclamation-circle' style={styles.iconcontent} />
            <Text style={styles.contenttext}>Terms of Services</Text>
            <Icon name="caret-right" style={styles.contenticon} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbox}>
          <TouchableOpacity onPress={PrivacyPolicyPress} style={styles.containerboxcontent}>
          <Icon name='exclamation-circle' style={styles.iconcontent} />
            <Text style={styles.contenttext}>Privacy Policy</Text>
            <Icon name="caret-right" style={styles.contenticon} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbox}>
          <TouchableOpacity onPress={FairUsePress} style={styles.containerboxcontent}>
          <Icon name='exclamation-circle' style={styles.iconcontent} />
            <Text style={styles.contenttext}>Fair Use</Text>
            <Icon name="caret-right" style={styles.contenticon} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbox}>
          <TouchableOpacity onPress={ContactUsPress} style={styles.containerboxcontent}>
          <Icon name='comment' style={styles.iconcontent} />
            <Text style={styles.contenttext}>Contact Us</Text>
            <Icon name="caret-right" style={styles.contenticon} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbox}>
          <TouchableOpacity onPress={AboutUsPress} style={styles.containerboxcontent}>
          <Icon name='info-circle' style={styles.iconcontent} />
            <Text style={styles.contenttext}>About Us</Text>
            <Icon name="caret-right" style={styles.contenticon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bgcolor,
  },
  topsection: {
    backgroundColor: Color.cbgcolor,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    height: 65,
    padding: 10,
  },
  backicon: {
    fontSize: 24,
    color: Color.white,
    marginRight: 'auto',
  },
  title: {
    flex: 1, 
    fontSize: 24,
    fontWeight: 'bold',
    color: Color.white,
    textAlign: 'center',
  },
  contentcontainer: {
    padding: 5,
    marginTop: 10,
  },
  containerbox: {
    margin: 2,
    backgroundColor: Color.ccbgcolor,
    borderRadius: 15,
  },
  containerboxcontent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.light,
    padding: 10,
    borderRadius: 15,
  },
  contenttext: {
    fontSize: 16,
    color: Color.white,
    marginRight: 'auto',
  },
  contenticon: {
    fontSize: 24,
    marginLeft: 'auto',
    marginRight: 10,
    color: Color.lightblue,
  },
  iconcontent: {
    fontSize: 24,
    color: Color.lightblue,
    marginRight: 10,
  }
});

export default MenuScreen;
