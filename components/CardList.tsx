import React from 'react';
import { Post } from '../models/Post';
import BlogCard from './BlogCard';

type propTypes = {
  posts: Post[];
};

const CardList: React.FC<propTypes> = (props) => {
  return (
    <div className="row">
      {props.posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CardList;
