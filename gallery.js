function upDate(previewPic) {
  /* Thay đổi text thành thuộc tính alt của ảnh nhỏ */
  document.getElementById('image').innerHTML = previewPic.alt;
  
  /* Thay đổi background-image thành ảnh nhỏ */
  document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  /* Xóa background-image */
  document.getElementById('image').style.backgroundImage = "url('')";
  
  /* Trả lại text ban đầu */
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
