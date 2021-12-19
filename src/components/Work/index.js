import React, { Component } from "react";
import axios from "axios";
import {
  Work,
  WorkTitle,
  WorkTitleSpan,
  Part,
  Icon,
  PartTitle,
  Line,
  Desc,
} from "./Work";

class Home extends Component {
  state = {
    works: [],
  };
  componentDidMount() {
    axios.get("/js/data.json").then((res) => {
      this.setState({ works: res.data.works });
    });
  }

  render() {
    const { works } = this.state;
    const WorkList = works.map((workItem) => {
      return (
        <Part first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <Desc>{workItem.body}</Desc>
        </Part>
      );
    });
    return (
      <Work>
        <div className="container">
          <WorkTitle>
            <WorkTitleSpan>My</WorkTitleSpan> Work
          </WorkTitle>

          {WorkList}
        </div>
      </Work>
    );
  }
}
export default Home;
