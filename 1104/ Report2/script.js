// DOM 노드를 생성하는 함수
function createProfile() {
    const profileContainer = document.getElementById('profile');
    
    // 이름 추가
    const nameElement = document.createElement('h1');
    nameElement.textContent = '최유진';
    profileContainer.appendChild(nameElement);
    
    // 소개글 추가
    const introElement = document.createElement('p');
    introElement.textContent = '저는 대학생이며, 현재 소프트웨어 학과를 복수전공 중이며, 개발을 공부하고 있습니다. 이 페이지는 JavaScript로 만들어졌습니다. 챗 GPT의 도움을 받았습니다.';
    profileContainer.appendChild(introElement);
    
    // 이메일 추가
    const emailElement = document.createElement('p');
    emailElement.textContent = 'Email: jinye24@naver.com';
    profileContainer.appendChild(emailElement);

    // 전화번호 추가
    const phoneElement = document.createElement('p');
    phoneElement.textContent = 'Phone: 010-4660-2898';
    profileContainer.appendChild(phoneElement);
    
    // 관심사 추가
    const interestsElement = document.createElement('p');
    interestsElement.textContent = '관심사: C++, JavaScript, 웹 개발, 게임 프로그래밍';
    profileContainer.appendChild(interestsElement);
}

// 페이지가 로드될 때 createProfile 함수 실행
window.onload = createProfile;
