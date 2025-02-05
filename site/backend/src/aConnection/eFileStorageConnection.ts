import cloudinary from 'cloudinary';

const fileStorageConnection = () => {
  cloudinary.v2.config({
    cloud_name: 'dyy2jjvtl', 
    api_key: '852554716584465', 
    api_secret: 'o0zjPu8mMZJ0n8rovW43xce2rAM' 
  })
}

export default fileStorageConnection;
