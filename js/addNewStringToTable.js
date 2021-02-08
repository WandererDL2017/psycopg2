let tableAll = document.querySelector('.table_all');
let tableAddres = document.querySelector('.table_addres');
let tableDevices = document.querySelector('.table_devices');
//
let inputId = document.querySelector('.input_id');

let myModalBtn = document.querySelector('.my_modal_btn');
let modalAdd = document.querySelector('.modal_add');
let input = document.querySelectorAll('.input');
//
let cellsTableAll = document.querySelectorAll('.table_all_th');
let cellsTableAddres = document.querySelectorAll('.table_addres_th');
let cellsTableDevices = document.querySelectorAll('.table_devices_th');
//
let tableAllCheckbox = document.querySelector('.table_all_checkbox');
let tableAddresCheckbox = document.querySelector('.table_addres_checkbox');
let tableDevicesCheckbox = document.querySelector('.table_devices_checkbox');

function getNewColumn(cells, numberOfCells) {
    let tbody = document.querySelector('.table_tbody')
    let tr = document.createElement('tr');
    tbody.append(tr);
    for (let i = 0; i < numberOfCells.length; i++){
        
        if(tableAllCheckbox.checked){
            let addValue = input[i].value;
            let cellsNew = document.createElement(cells);
            cellsNew.innerHTML = addValue;
            tr.append(cellsNew);
        }else if(tableAddresCheckbox.checked){
            let addValue = input[i].value;
            let cellsNew = document.createElement(cells);
            cellsNew.innerHTML = addValue;
            tr.append(cellsNew);
        }else if(tableDevicesCheckbox.checked){
            let addValue = input[i].value;
            let cellsNew = document.createElement(cells);
            cellsNew.innerHTML = addValue;
            tr.append(cellsNew);
        }
        
    }
    
    return tr;
    
    
}

myModalBtn.addEventListener('click', function(){
    if(tableAllCheckbox.checked){
        tableAll.append(getNewColumn('td', cellsTableAll));
    }else if(tableAddresCheckbox.checked){
        tableAddres.append(getNewColumn('td', cellsTableAddres));
    }else if(tableDevicesCheckbox.checked){
        tableDevices.append(getNewColumn('td', cellsTableDevices))
    }else{
        alert('Вы не выбрали не одной таблицы')
    }
    
    
    modalAdd.classList.add("hidden");
})

