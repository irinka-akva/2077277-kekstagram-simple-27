const uploadFile = document.querySelector('#upload-file');
const preview = document.querySelector('#preview-img');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const renderNewFile = () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

uploadFile.addEventListener('change', renderNewFile);
