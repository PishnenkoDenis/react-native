import styled from "styled-components/native";
import { editDate, truncateTitle } from "../utils/utils";

const PostView = styled.View`
  padding: 15px;
  margin-top: 40px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  flex-direction: row;
`;
const PostImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
const PostDate = styled.Text`
  font-size: 12px;
  margin-top: 2px;
`;
const PostDetails = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDate>{editDate(createdAt)}</PostDate>
      </PostDetails>
    </PostView>
  );
};
