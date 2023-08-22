import React from "react";
import ReactDOM from "react-dom";
import profImage from "./img/meta-logo.png";
import postImage from "./img/post1.png";
import fblogo from "./img/fblogo.png";
import fbpost from "./img/fbpost.png";
import instalogo from "./img/instalogo.png";
import instapost from "./img/instapost.jpg";
import linklogo from "./img/lnkinlogo.png";
import linkpost from "./img/lnkinpost.jpg";
import ytlogo from "./img/ytlogo.png";
import ytpost from "./img/ytpost.jpg";
import { FaGlobeAmericas } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { AiFillLike } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import { TbShare3 } from 'react-icons/tb';
import "./index.css";

function Fbpost(props) {
  return (
    <div className="boxfb">
      <div className="top">
        <div className="lfsidetop">
          <div className="profImg"><img src={props.profUrl}></img></div>
          <div className="profinfo"><h2>{props.name}</h2>
          <span>{props.time} . </span><FaGlobeAmericas /></div>
        </div>
        <div className="rtsidetop">
          <span><BsThreeDots /></span>
          <span><RxCross1 /></span>
        </div>
      </div>
      <div className="middle">
          <p>{props.text}</p>
          <img src={props.postImg}></img>
      </div>
      <div className="bottom">
          <div className="postReached">
            <div className="likeSec"> <span className="likeIcon"> <AiFillLike /> </span> <span className="loveIcon"><AiFillHeart /></span> <span>9.2k</span></div>
            <div className="comntSec"><span>205 comments</span> <span>496 shares</span></div>
          </div>
          <div className="postBtns">
            <div className="likeBtn"><span><AiOutlineLike /></span> <span>Like</span></div>
            <div className="comntBtn"><span><BiMessage /></span> <span>Comment</span></div>
            <div className="shareBtn"><span><TbShare3 /></span> <span>Share</span></div>
          </div>
      </div>
    </div>
  );
}

ReactDOM.render(<div>
  <Fbpost profUrl={profImage} name={"Meta"} time={"2h"} text={"Meta is a term that refers to something that is self-referential or concerned with its own nature. In the digital age,"} postImg={postImage} />
  <Fbpost profUrl={fblogo} name={"Facebook"} time={"5h"} text={"Facebook, now known as Meta, is a social media giant that has transformed global communication and connectivity."} postImg={fbpost} />
  <Fbpost profUrl={instalogo} name={"Instagram"} time={"10h"} text={"Instagram is a visually captivating social platform that emphasizes photo and video sharing."} postImg={instapost} />
  <Fbpost profUrl={linklogo} name={"LinkedIn"} time={"13h"} text={"LinkedIn serves as a professional networking platform, connecting individuals and businesses in the realm of work and careers."} postImg={linkpost} />
  <Fbpost profUrl={ytlogo} name={"YouTube"} time={"17h"} text={"YouTube is a popular video-sharing platform that allows users to upload, watch, and share a wide variety of videos."} postImg={ytpost} />
  </div>, document.querySelector("#root"));