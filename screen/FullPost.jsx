import { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Text, Alert } from "react-native";
import styled from "styled-components/native";
import { Loader } from "../components/Loader";
import { fetchPost } from "../api/posts";

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
});

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPost = ({ route, navigation }) => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id, title } = route.params;

  const handlePost = async (id) => {
    try {
      setIsLoading(true);
      const data = await fetchPost(id);
      if (data) {
        setPost(data);
        setIsLoading(false);
      }
    } catch (error) {
      Alert.alert("Fetch fucked up", "Something went wrong");
    }
  };

  useEffect(() => {
    handlePost(id);
  }, []);

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={styles.view}>
      <PostImage source={{ uri: post.imageUrl }} />
      <PostText>{post.title}</PostText>
    </View>
  );
};
