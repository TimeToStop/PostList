import './PostPreview.css';
import {IPost} from "../api/IPost";
import React from "react";
import { Link } from "react-router-dom";

const MAX_BODY_LENGTH = 75;

function sliceBody(body: string): string {
    const DOTS = '...';

    if (body.length >= MAX_BODY_LENGTH) {
        body = body.slice(0, MAX_BODY_LENGTH - DOTS.length) + DOTS;
    }

    return body;
}

export interface IPostPreviewProps {
    index: number;
    post: IPost;
}

export default function PostPreview(props: IPostPreviewProps) {
    return (
        <div className="container">
            <div className="index"> { props.index } </div>
            <div className="title"> { props.post.title } </div>
            <div className="text"> { sliceBody(props.post.body) } </div>
            <Link to={`/posts/${props.post.id}`} className="link">View</Link>
        </div>
    );
}