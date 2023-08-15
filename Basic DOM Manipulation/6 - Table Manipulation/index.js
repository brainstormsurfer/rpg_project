const toggleColumn = (index) =>{
rows = document.querySelectorAll('#dataTable tr ')
rows.forEach(row => {
  const cell = row.cells[index]
  console.log(cell)
  cell.style.display = (cell.style.display==='none') ? '' : 'none';
});
}


function resetTable() {

const rows =document.querySelectorAll('#dataTable tr');
rows.forEach(row =>{
  const cells = Array.from(row.cells);
  console.log(cells)
  cells.forEach(cell =>{
cell.style.display = '';
  });
});
}

