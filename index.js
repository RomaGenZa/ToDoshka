const head = document.createElement('h1');
const section = document.createElement('section');
const input = document.createElement('input');
const block = document.createElement('div');
const btnAdd = document.createElement('button');
const btnDelete = document.createElement('button');

head.classList.add('list');
head.textContent = 'Сегодняшний список';
document.body.append(head);

section.classList.add('block');
document.body.append(section);

input.classList.add('input_field');
section.append(input);

block.classList.add('block_buttons');
section.append(block);

btnAdd.classList.add('button_add');
btnAdd.textContent = 'Добавить';
section.append(btnAdd);

btnDelete.classList.add('delet_basket');
btnDelete.textContent ='Удалить';
section.append(btnDelete);

function createSection() {
  const newSection = section.cloneNode(true);

  const newBtnAdd = newSection.querySelector('.button_add');
  const newBtnDelete = newSection.querySelector('.delet_basket');

  newBtnAdd.addEventListener('click', createSection);
  newBtnDelete.addEventListener('click', () => removeSection(newSection));
  document.body.append(newSection);
}

// Функция для удаления блока и проверки, остались ли ещё элементы
function removeSection(targetSection) {
  targetSection.remove();

  // Проверяем, есть ли ещё секции на странице
  if (document.querySelectorAll('.block').length === 0) {
    showPlaceholder();
  }
}

// Функция для отображения блока с картинкой
function showPlaceholder() {
  const placeholder = document.createElement('div');
  placeholder.classList.add('placeholder');

  const img = document.createElement('img');
  img.classList.add('img_block')
  img.src = './images/TheEnd.jpg'; 
  img.alt = 'Нет элементов';

  placeholder.append(img);
  document.body.append(placeholder);

  const btnFirst = document.createElement('button');
  btnFirst.classList.add('button_first');
  btnFirst.textContent = 'Заново'
  placeholder.append(btnFirst)
}

// Привязываем события к первому блоку
btnAdd.addEventListener('click', createSection);
btnDelete.addEventListener('click', () => removeSection(section));
