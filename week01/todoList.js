/**
 * 요구사항
 * 
 * 1. A(Add): 할 일 리스트 추가
 * 2. C(Clear all): 리스트 초기화
 * 3. C(Check): 체크
 * 4. E(Edit): 편집(리스트 순서 변경 x)
 * 5. D(Delete): 해당 요소 삭제
 * 6. 새로고침 시 리스트 유지
 * ---
 * - 데이터 관리, 바인딩 따로 처리해야 하나
 * - 새로고침 시에 리스트 유지 방법
 *   - localStorage를 이용하면 새로고침 시에도 리스트 유지 가능
 *   - sessionStorage와의 차이
 */
const node = document.getElementsByClassName("list-group")[0];

document.getElementById('btn_add').addEventListener('click', function () {
    const item = document.getElementById('ipt_item').value;
    console.log(item);
    addItem(item);
});

document.getElementById('btn_clear').addEventListener('click', function () {
    clearItems();
});

function addItem(item) {
    // 1. 리스트 추가
    let innerInput = document.createElement('input');
    innerInput.classList.add('txt_item');
    innerInput.type = 'text';
    innerInput.style = 'width: 65%;';
    innerInput.value = item;
    innerInput.readOnly;
    let innerBtn1 = document.createElement('button');
    innerBtn1.classList.add('btn_chk');
    innerBtn1.innerText = 'C';
    let innerBtn2 = document.createElement('button');
    innerBtn2.classList.add('btn_edit');
    innerBtn2.innerText = 'E';
    let innerBtn3 = document.createElement('button');
    innerBtn3.classList.add('btn_del');
    innerBtn3.innerText = 'D';
    let innerDiv = document.createElement('div');
    innerDiv.classList.add('list-group-item');

    innerDiv.appendChild(innerInput);
    innerDiv.appendChild(innerBtn1);
    innerDiv.appendChild(innerBtn2);
    innerDiv.appendChild(innerBtn3);
    node.appendChild(innerDiv);

    // 2. 로컬 스토리지 저장
    localStorage.setItem(item, item);
    console.log(localStorage);

    // 3. 입력 후 입력창 초기화
    document.getElementById('ipt_item').value = "";

    // 4. 이벤트 바인딩
    innerBtn1.addEventListener('click', function(e) {
        checkItem(e)
    });
    innerBtn2.addEventListener('click', function(e) {
        editItem(e);
    });
    innerBtn3.addEventListener('click', function(e) {
        deleteItem(e);
    });
}

function deleteItem(e) {
    console.log(e.target);
    console.log(e.target.parentNode);

    // 1. 리스트 삭제
    e.preventDefault();
    e.stopPropagation();
    e.target.parentNode.remove();

    // 2. 로컬 스토리지 삭제
    localStorage.removeItem(e.target);
}

function checkItem(e) {
    console.log(e.target.parentNode.nodeName);
    console.log(e.target.parentNode.children);
    Array.prototype.forEach.call(e.target.parentNode.children, function(ele) {
        if (ele.nodeName.toUpperCase() === 'INPUT') {
            ele.style = 'text-decoration: line-through;';
        }
    });
}

function editItem(e) {

}

function clearItems() {
    // 1. 리스트 삭제
    // let items = document.getElementsByClassName("list-group-item");
    // console.log(items);
    // Array.prototype.forEach.call(items, function(item) {
    //     item.remove();
    // });
    node.removeChild(node.childNodes[0]); // node.childNodes[0] === div

    // 2. 로컬 스토리지 초기화
    localStorage.clear();
}

function refresh() {
    // 새로고침 시 localStorage로 리스트 복구
}