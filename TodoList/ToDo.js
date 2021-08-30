const add = function() {
    const inputData = document.getElementById('inputData').value;
    return addData(inputData);
}


const addData = function(inputData) {
    console.log(inputData);

    if(inputData == ''){
        alert('할일을 입력하세요');
        return false;
    };

    // const table = document.getElementById('tb');

    let tableCount = 0;
    

    todo =
        `
        <tr id='${tableCount}'>
        <td><input type='checkbox' class='checkBox' onclick='checkData(this.parentNode.parentNode)'></td>
        <td><input type='text' class='todo' value='${inputData}'></td>
        <td><button onclick='delData(this.parentNode.parentNode)'>x</button></td>
        </tr>
        `;
    

    // table.innerHTML += todo;
    $('#tb').append(todo);

    document.getElementById('inputData').value = '';
    
}


const checkData = function(tablerow) {
    
    let checked = tablerow.cells[0].getElementsByTagName('input')[0].checked

    if (checked == true) {
        tablerow.cells[1].getElementsByTagName('input')[0].style.color = 'gray';
        tablerow.cells[1].getElementsByTagName('input')[0].style.textDecoration = 'line-through';
    }
    else {
        tablerow.cells[1].getElementsByTagName('input')[0].style.color = 'black';
        tablerow.cells[1].getElementsByTagName('input')[0].style.textDecoration = 'none';
    }

}

const delData = function(tablerow) {
    tablerow.remove();
}