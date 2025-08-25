'use strict';

// write code here

const table = document.querySelector('.container');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

table.addEventListener('click', (e) => {
  const field = document.querySelector('tbody');
  const rowCount = field.rows.length;
  const rowArr = document.querySelectorAll('tr');

  if (e.target.classList.contains('append-row')) {
    if (field.children.length >= 2 && field.children.length < 10) {
      removeRowBtn.removeAttribute('disabled');

      const newRow = document.createElement('tr');

      for (let i = 0; i < rowArr[0].children.length; i += 1) {
        const newCell = document.createElement('td');

        newRow.appendChild(newCell);
      }

      field.appendChild(newRow);
    }

    if (field.children.length === 10) {
      // якщо рядків 10, то кнопка стає неактивною
      e.target.setAttribute('disabled', 'true');
    }
  }

  if (e.target.classList.contains('remove-row')) {
    if (field.children.length > 2 && field.children.length <= 10) {
      // саме така умова для того, щоб кнопка була
      // активна, коли рядків від 2 до 9
      field.removeChild(field.lastElementChild);
      appendRowBtn.removeAttribute('disabled');
    }

    if (field.children.length === 2) {
      e.target.setAttribute('disabled', 'true');
    }
  }

  if (e.target.classList.contains('append-column')) {
    if (rowArr[0].children.length >= 2 && rowArr[0].children.length < 10) {
      removeColumnBtn.removeAttribute('disabled');

      rowArr.forEach((row) => {
        const newCell = document.createElement('td');

        row.appendChild(newCell);
      });
    }

    if (rowArr[0].children.length === 10) {
      // якщо рядків 10, то кнопка стає неактивною
      e.target.setAttribute('disabled', 'true');
    }
    // console.log(rowArr[0].children.length);
  }

  if (e.target.classList.contains('remove-column')) {
    if (rowArr.length >= 2) {
      rowArr.forEach((row) => {
        if (row.children.length > 2 && row.children.length <= 10) {
          row.removeChild(row.lastElementChild);
          appendColumnBtn.removeAttribute('disabled');
        }

        if (row.children.length === 2) {
          e.target.setAttribute('disabled', 'true');
        }
      });
    }
  }
});
