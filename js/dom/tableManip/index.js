const rows = document.querySelectorAll('#dataTable tr');

const toggleColumn = (index) => {
    rows.forEach(row => {
        const cell = row.cells[index];
        cell.style.display = cell.style.display === 'none' ? '' : 'none';
    });
}

const resetTable = () => {
    rows.forEach(row => Array.from(row.cells).forEach(cell => cell.style.display = ''));
}