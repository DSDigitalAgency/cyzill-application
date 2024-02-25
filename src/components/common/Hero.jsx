import React from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";
import userVideo from '../../../assets/videos/defaultvideo.mp4';

const Hero = () => {

    const videoRef = React.useRef(null);

  const handlePlaybackStatusUpdate = (status) => {
    // Handle playback status updates if needed
  };

    return (
        <View className="w-full h-52 items-center">
            <Video
                ref={videoRef}
                source={userVideo}
                className="w-96 h-52 rounded"
                resizeMode="cover"
                shouldPlay
                isLooping
                onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
            />
        </View>
    );
};

export default Hero;
