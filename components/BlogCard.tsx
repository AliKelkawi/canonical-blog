import React from 'react';
import Image from 'next/image';
import { Post } from '../models/Post';
import styles from '../styles/BlogCard.module.css';

type propTypes = {
  post: Post;
};

const BlogCard: React.FC<propTypes> = ({ post }) => {
  return (
    <div className="col-4 u-equal-height">
      <div
        className={`${styles.top_border} ${styles.card} p-card p-card--highlighted`}
      >
        <div className="p-card__inner highlight--design">
          <h5>{post.category.toUpperCase()}</h5>
        </div>
        <hr className="u-no-margin--top" />
        <Image
          className={`p-card__image`}
          src={post.image}
          width="100%"
          height="60%"
          layout="responsive"
          objectFit="contain"
        />
        <div className="p-card__inner">
          <a href={post.link}>
            <h4>{post.title}</h4>
          </a>
        </div>
        <div className={styles.author}>
          <em className="p-card__inner">
            By <a href="#">{post.author}</a> on {post.publish_date}
          </em>
          <hr className="u-no-margin--bottom spv--x-small" />
          <div className="p-card__inner">{post.type}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
