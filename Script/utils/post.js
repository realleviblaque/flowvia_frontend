import { homePost, savePostToStorage } from "./post-array.js";

export function getPost() {
  const postText = document.querySelector('.post-enter').value.trim();
  const imageInput = document.getElementById('postImage');
  let imageURL = '';

  if (postText === '' && imageInput.files.length === 0) return;

  if (imageInput.files.length > 0) {
    const file = imageInput.files[0];
    imageURL = URL.createObjectURL(file);
  }
  homePost.push({
    id: crypto.randomUUID(), 
    userImg: '../src/images/file_0000000076d061f4aa69bd6aa79bafc0.png',
    user: 'Levi Blaque',
    username: 'realleviblaque',
    postTime: '02:46 PM',
    postDate: '26/02/2026',
    postText: postText,
    postImg: imageURL, 
    postProject: {
      budget: '$900 - $4k',
      deadline: '12/05/2026',
    },
    likes: 2,
    liked: false,
    comment: 4,
    share: 0,
    save: 1
  })

  document.querySelector('.post-enter').value = '';
  imageInput.value = '';
  savePostToStorage();
}
