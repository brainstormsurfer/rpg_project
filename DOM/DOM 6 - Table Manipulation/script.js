
function toggleColumn(index) {
    const rows = document.querySelectorAll('#dataTable tr')
    rows.forEach(row => {
        const cell = row.cells[index]
        if (cell.style.display === 'none') {
            cell.style.display = ''; 
          } else {
            cell.style.display = 'none'; 
          }
        });
}

function resetTable() {
    const rows = document.querySelectorAll('#dataTable tr');
    rows.forEach(row => {
      const cellsArray = Array.from(row.cells);
      cellsArray.forEach(cell => {
        cell.style.display = '';
      });
    });
  }