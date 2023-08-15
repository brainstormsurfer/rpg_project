function toggleColumn(index) {
  const rows = document.querySelectorAll("#dataTable tr");
  rows.forEach(function (row) {
    const cell = row.cells[index];
    if (cell.style.display === 'none') {
      cell.style.display = '';
    } else {
      cell.style.display = 'none';
    }
  });
}

function resetTable() {
  const rows = document.querySelectorAll("#dataTable tr");
  rows.forEach(function (row) {
    const cells = Array.from(row.cells);
    cells.forEach(function (cell) {
        cell.style.display = '';    
    });
  });
}

/*
const cells = Array.from(row.cells)
        cells.forEach(function (cell) {
            cell.
        })
 */
