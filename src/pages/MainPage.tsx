import {useGetPostsQuery} from "../api/PostAPI";
import './MainPage.css';
import {IPost} from "../api/IPost";
import PostPreview from "../widgets/PostPreview";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from "react";

export default function MainPage() {
    const { data, isLoading, error } = useGetPostsQuery();
    const [store, setStore] = useState([] as IPost[]);

    if (isLoading) return (<div>Is Loading ...</div>);
    if (error) return (<div>Error</div>);
    if (!data) return (<div>Empty</div>);

    if (store.length === 0 && data.length !== 0) {
        setStore(data);
    }

    return (
        <div>
            <InfiniteScroll
                next={() => setStore(store.concat(data))}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                dataLength={store.length}
            >
                { store.map((post: IPost, i: number) => (<PostPreview key={i} index={1 + i} post={post} />)) }
            </InfiniteScroll>
         </div>
    );
}