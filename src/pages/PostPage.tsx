import React from "react";
import './PostPage.css';
import { IPost } from "../api/IPost";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useGetPostQuery } from "../api/PostAPI";

function isPosInteger(str: string): boolean {
    return /^[1-9]\d*$/.test(str)
}

export interface PostPageProps {
    post: IPost
}

export default function PostPage() {
    const { pathname } = useLocation();
    const id = matchPath("/posts/:id", pathname)?.params.id || '';
    const { data, isLoading, error} = useGetPostQuery(Number(id));

    if (!isPosInteger(id)) return <Link to="/posts"/>;

    if (isLoading) return (<div>Loading...</div>);
    if (error) return (<div>Error...</div>);
    if (!data) return (<div>Empty</div>);

    return (
        <div className="main">
            <div className="header">
                <Link to={`/posts`} className="link">Back</Link>
                <div> From user with ID = { data.userId } </div>
            </div>

            <div className="block">
                Title: { data.title }
            </div>
            <div className="block">
                <p>Text:</p>
                <p> { data.body } </p>
            </div>
        </div>
    );
}