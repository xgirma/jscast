import PropTypes, { shape, number, string } from 'prop-types';

const typePod = shape({
  _id: string,
  title: string,
  link: string,
  description: string,
  image: string,
  author: string,
  copyright: string,
  episodeTitle: string,
  episodeDescription: string,
  published: string,
  url: string,
  mediaType: string,
  likes: number,
});

const typeCollection = shape({
  _id: string,
  title: string,
  link: string,
  description: string,
  image: string,
  author: string,
  copyright: string,
});

const typePlaylist = PropTypes.arrayOf(typePod);
const typeCollections = PropTypes.arrayOf(typeCollection);

export { typePod, typePlaylist, typeCollections, typeCollection };
