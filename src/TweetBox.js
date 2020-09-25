import { Button, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    // stops site from refreshing
    e.preventDefault();

    db.collection("posts").add({
      displaName: "john",
      username: "hupp",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://i.ytimg.com/vi/RzDizTFU9_Q/hqdefault.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.ytimg.com/vi/RzDizTFU9_Q/hqdefault.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
