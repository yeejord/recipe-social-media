import { Button, Col, Row } from "react-bootstrap";
import ProfileBottomBar from "./ProfileBottomBar";
import ProfileBasicInfo from "./ProfileBasicInfo";
import AllergenDisplay from "./AllergenDisplay";
import PreferencesDisplay from "./PreferencesDisplay";
import BioDisplay from "./BioDisplay";
import { Link } from "react-router-dom";
import { User } from "../../Types/Types";
import { useSelector } from "react-redux";
import * as client from "../client";
import { useEffect, useState } from "react";

export default function MyProfileViewer({ user }: { user: User }) {
  const { currentUser } = useSelector((state: any) => state.profilesReducer);
  const [followingUser, setFollowingUser] = useState<
    boolean | "LOADING" | "NONE"
  >(!!currentUser ? "LOADING" : "NONE");
  const fetchFollowingUser = async () => {
    setFollowingUser(await client.amFollowing(user._id));
  };
  if (!!currentUser) {
    useEffect(() => {
      fetchFollowingUser();
    }, []);
  }
  if (followingUser === "LOADING") {
    return <p>Loading</p>;
  }
  if (!!currentUser && user._id === currentUser._id) {
    user = currentUser;
  }
  const clickFollow = async () => {
    await client.follow(user._id);
    setFollowingUser(true);
  };
  const clickUnfollow = async () => {
    await client.unfollow(user._id);
    setFollowingUser(false);
  };
  return (
    <div id="recipe-profile">
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfo user={user} />
          {(!!currentUser &&
            currentUser._id !== user._id &&
            ((followingUser && (
              <Button onClick={clickUnfollow}>UnFollow</Button>
            )) ||
              (!followingUser && (
                <Button onClick={clickFollow}>Follow</Button>
              )))) || <Button disabled>Follow</Button>}
        </Col>
        <Col md={8}>
          <Row>
            <div className="flex-row justify-content-around m-3">
              <Link
                className="btn btn-primary btn-lg m-3"
                to={`/Profile/${user._id}/MyPosts`}
              >
                My Recipes
              </Link>
              <Link
                className="btn btn-primary btn-lg m-3"
                to={`/Profile/${user._id}/Favorites`}
              >
                My Saved
              </Link>
            </div>
          </Row>
          <Row>
            <BioDisplay user={user} />
            <AllergenDisplay user={user} />
            <PreferencesDisplay user={user} />
          </Row>
        </Col>
      </Row>
      {!!currentUser && currentUser._id === user._id && (
        <ProfileBottomBar user={user} />
      )}
    </div>
  );
}
