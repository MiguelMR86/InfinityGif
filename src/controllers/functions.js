const api_key='6pYvlhz33gSzgLGTycIsfcaZQJUAyUTB';
const url = 'https://api.giphy.com/v1/gifs/search?api_key=' + api_key;
const options = '&limit=10&offset=0&rating=g&lang=es&bundle=messaging_non_clips';

export const getNextGifs = async (name, offset) => {
  const query = '&q=' + name;
  const options = '&limit=10&offset=' + offset + '&rating=g&lang=es&bundle=messaging_non_clips';
  const finalUrl = url + query + options;

  return fetch( finalUrl )
    .then((res) => res.json())
    .then((response) => {
      const gifs = []
      const { data } = response;
      data.map((img) => {
        const author = img.user === undefined ? 'Anonymous' : img.user.display_name;
        const avatar = img.user === undefined ? 'https://media.giphy.com/avatars/default5.gif' : img.user.avatar_url;
        gifs.push({ id: img.id, title: img.title, url: img.images.original.url, author: author, avatar: avatar });
      });
      return gifs;
    })
    .catch((error) => console.log("Error: ", error));
};

export const getGifsByName = async (name) => {
  const query = '&q=' + name;
  const finalUrl = url + query + options;

  return fetch( finalUrl )
    .then((res) => res.json())
    .then((response) => {
      const gifs = []
      const { data } = response;
      data.map((img) => {
        const author = img.user === undefined ? 'Anonymous' : img.user.display_name;
        const avatar = img.user === undefined ? 'https://media.giphy.com/avatars/default5.gif' : img.user.avatar_url;
        gifs.push({ id: img.id, title: img.title, url: img.images.original.url, author: author, avatar: avatar });
      });
      return gifs;
    })
    .catch((error) => console.log("Error: ", error));
};

export const scrollToTopSmooth = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}