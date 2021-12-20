import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Profile.js";
import {
  ProfileSkills,
  ProfileSec,
  ProfileList,
  ProfileItem,
  ProfileItemSpan,
  SpanWeb,
  Skills,
  SkillsDesc,
  Bar,
  BarTitle,
  BarPerc,
  BarParent,
  BarParentSpan,
  ProfileTitle,
  SkillsTitle,
  Span,
} from "./Profile.js";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setProfiles(res.data.profile);
    });
  }, []);
  const ProfileData = profiles.map((profileItem) => {
    return (
      <Bar key={profileItem.id}>
        <BarTitle>{profileItem.title}</BarTitle>
        <BarPerc>{profileItem.percentage}</BarPerc>
        <BarParent>
          <BarParentSpan className={profileItem.fill}></BarParentSpan>
        </BarParent>
      </Bar>
    );
  });
  return (
    <ProfileSkills>
      <div className="container">
        <ProfileSec>
          <ProfileTitle>
            <ProfileItemSpan>My </ProfileItemSpan>Profile
          </ProfileTitle>
          <ProfileList>
            <ProfileItem>
              <ProfileItemSpan>Name</ProfileItemSpan>
              Hamza Nabil
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Birthday</ProfileItemSpan>
              21/1/1996
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Address</ProfileItemSpan>
              Ain shams
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Phone</ProfileItemSpan>
              4444 5555 6666
            </ProfileItem>

            <ProfileItem>
              <ProfileItemSpan>Email</ProfileItemSpan>
              hamza@hamza.com
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Website</ProfileItemSpan>
              <SpanWeb>www.google.com</SpanWeb>
            </ProfileItem>
          </ProfileList>
        </ProfileSec>

        <Skills>
          <SkillsTitle>
            Some <Span>skills</Span>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {ProfileData}
        </Skills>
      </div>
    </ProfileSkills>
  );
};

export default Profile;
