import React, { Component } from "react";
import "./Media";
import { SocialMediaSection, Social, Icon, P, Span } from "./Media";
import axios from "axios";

class SocialMedia extends Component {
  state = {
    social: [],
  };
  componentDidMount() {
    axios.get("/js/data.json").then((res) => {
      this.setState({ social: res.data.social });
    });
  }
  render() {
    const { social } = this.state;

    const SocialList = social.map((socialItem) => {
      return (
        <Social item={socialItem.id} key={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
          <P>
            <Span className="info1">{socialItem.title}</Span>
            <Span className="info2">{socialItem.body}</Span>
          </P>
        </Social>
      );
    });
    return <SocialMediaSection>{SocialList}</SocialMediaSection>;
  }
}
export default SocialMedia;
