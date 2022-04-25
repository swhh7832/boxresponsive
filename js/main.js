// 페이지 로드 이벤트
window.addEventListener("load", ()=>{	// window 즉, 브라우저에 이벤트 연결 
		// 이 이벤트문은, 이미지소스까지 모드 로딩이 완료되어야 안쪽 코드를 실행한다. 
		// 플러그인 사이트 자체에서 아래 구조를 붙이기 한 뒤 필요한 값만 수정해서 사용하라고 제시되어있다. 
	const grid = new Isotope("section", {  // 배치할 요소를 감싸고 있는 article의 부모 section 요소명
	
		itemSelector: "article", // 배치할 요소명 article 
		columnWidth: "article", //넓이값을 구할 요소명 article 
		transitionDuration: "0.5s"  // 화면 재배치시 요소가 움직이는 속도
	});		

	// btn에 해당 버튼 경로 연결
	// 클릭할 모든 버튼 요소 변수 btns에 저장
	const btns = document.querySelectorAll("main ul li");	
	//버튼의 갯수만큼 반복을 돌면서 
	for(let el of btns){	
		//각 버튼에 클릭 이벤트 연결	
		el.addEventListener("click", e=>{
			e.preventDefault();	 // 링크차단되고,	
			//변수 sort에 클릭한 대상 li의 자식인 a요소의 href 속성값 저장	
			const sort = e.currentTarget.querySelector("a").getAttribute("href");
			//grid에 저장된 결과값을 불러와 재정렬 기능 연결
			grid.arrange({	
				//옵션값으로 sort변수값 지정			
				filter : sort
			});
			//다시 모든 버튼의 갯수만큼 반복을 돌면서
			for(let el of btns){		
				//각 버튼의 클래스명 "on"을 제거해 비활성화		
				el.classList.remove("on");
			}	
			//클릭한 대상만 선택해서 클래스명 "on"을 추가해 활성화
			e.currentTarget.classList.add("on");
		})
	}	
});

