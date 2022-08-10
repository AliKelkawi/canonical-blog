import { NextPage, GetStaticProps } from 'next';
import CardList from '../components/CardList';
import { Post } from '../models/Post';

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }: Props) => {
  return <CardList posts={posts} />;
};

// This gets called first
export const getStaticProps: GetStaticProps = async () => {
  console.log('Regenerating');

  const response = await fetch(
    'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json',
  );

  const data = await response.json();
  let posts = [];

  // Assuming the response is consistent in terms of keys returned.
  for (const item of data) {
    let post: Post = {
      id: item.id,
      category: item.name || 'Canonical Post',
      title: item.title.rendered,
      image: item.featured_media,
      author: item['_embedded'].author[0].name,
      publish_date: new Date(item.date).toDateString(),
      type: capitalizeFirstLetter(item.type),
      link: item.link,
    };

    posts.push(post);
  }

  return {
    props: {
      posts: posts,
    },
    revalidate: 600, // Get a new version if 10 minutes have passed. Otherwise, return statically generated version
  };
};

function capitalizeFirstLetter(str: String) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default Home;
