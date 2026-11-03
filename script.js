// 1. DOM 요소 선택
const toggleBtn = document.getElementById('toggleBtn');
const targetImg = document.getElementById('targetImg');

// 2. 이벤트 리스너 등록
toggleBtn.addEventListener('click', () => {
  // .hidden 클래스를 토글 (있으면 제거, 없으면 추가)
  targetImg.classList.toggle('hidden');

  // 이미지 표시 상태에 따른 버튼 텍스트 변경
  if (targetImg.classList.contains('hidden')) {
    toggleBtn.textContent = '버튼';
  } else {
    toggleBtn.textContent = '버튼';
  }
});