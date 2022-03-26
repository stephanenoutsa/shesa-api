export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }

  callback(null, true);
};

export const editedFileName = (req, file, callback) => {
  const filenameArray = file.originalname.split('.');

  const filename = filenameArray[0];
  const timestamp = new Date().getTime();
  const fileExtension = filenameArray[filenameArray.length - 1];

  callback(null, `${filename}_${timestamp}.${fileExtension}`);
};
