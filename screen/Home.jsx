import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Alert,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../components/Post";
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";
import { Loader } from "../components/Loader";

export const Home = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handlePosts = async () => {
    try {
      setIsLoading(true);
      const data = await fetchPosts();
      if (data) {
        setPosts(data);
        setIsLoading(false);
      }
    } catch (error) {
      Alert.alert("Fetch fucked up", "Something went wrong");
    }
  };

  useEffect(() => {
    handlePosts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Post Deatils", {
                id: item.id,
                title: item.title,
              })
            }
          >
            <Post
              title={item.title}
              createdAt={item.createdAt}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handlePosts} />
        }
      />
    </View>
  );
};
