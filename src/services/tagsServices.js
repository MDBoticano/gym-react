import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/tags';


const getTags = async () => {
  const request = await axios.get(baseUrl);
  const tags = request.data;
  return tags;
}

export default { getTags };
