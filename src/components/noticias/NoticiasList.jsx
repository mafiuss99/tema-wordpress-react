import React from "react";

import { getPageById } from "@services/api";

export default class NoticiasList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: null,
    };
    getPageById(publisherData.page).then((res) => {
      this.setState({
        list: res,
      });
    })
  }

  render() {
    console.log("asads", this.state.list);
    if (this.state.list) {
      return (
        <div dangerouslySetInnerHTML={{__html: this.state.list.content.rendered}}></div>
      );
    }

    return <p>Loading</p>
  }
}
