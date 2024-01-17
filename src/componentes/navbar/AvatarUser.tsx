import { Avatar } from "@nextui-org/react";
import { Component } from "react";

export default class AvatarUser extends Component {
  render() {
    return (
      <div className="flex items-center mr-5 hover:scale-105">
      <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />


    </div>
    );
  }
}
