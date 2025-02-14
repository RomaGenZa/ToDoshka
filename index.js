const head = document.createElement('h1');
const section = document.createElement('section');
const input = document.createElement('input');
const block = document.createElement('div');
const btnAdd = document.createElement('button');
const btnDelete = document.createElement('button');
const btnFirst = document.createElement('button');
const placeholder = document.createElement('div');
const img = document.createElement('img');

head.classList.add('list');
head.textContent = 'Сегодняшний список';
document.body.append(head);

section.classList.add('block');
document.body.append(section);

input.classList.add('input_field');
input.placeholder = 'текст'
section.append(input);

block.classList.add('block_buttons');
section.append(block);

btnAdd.classList.add('button_add');
btnAdd.textContent = 'Добавить';
block.append(btnAdd);

btnDelete.classList.add('delet_basket');
btnDelete.textContent = 'Удалить';
block.append(btnDelete);

function createSection() {
  const newSection = document.createElement('section');
  newSection.className = 'block';
  document.body.append(newSection);

  const newinput = document.createElement('input');
  newinput.className = 'input_field';
  newinput.placeholder = 'текст'
  newSection.append(newinput);

  const newBlock = document.createElement('div');
  newBlock.className = 'block_buttons';
  newSection.append(newBlock);

  const newBtnAdd = document.createElement('button');
  newBtnAdd.className = 'button_add';
  newBtnAdd.textContent = 'Добавить';
  newBlock.append(newBtnAdd);

  const newBtnDelete = document.createElement('button');
  newBtnDelete.className = 'delet_basket';
  newBtnDelete.textContent = 'Удалить';
  newBlock.append(newBtnDelete);

  newBtnAdd.addEventListener('click', createSection);
  newBtnDelete.addEventListener('click', () => removeSection(newSection));
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
  
  placeholder.classList.add('placeholder');
  
  img.classList.add('img_block')
  img.src = './images/TheEnd.jpg'; 
  img.alt = 'Сдесь должна быть картинка, но что то пошло не так';

  placeholder.append(img);
  document.body.append(placeholder);

  btnFirst.classList.add('button_first');
  btnFirst.textContent = 'Заново';
  placeholder.append(btnFirst);
}

// Привязываем события к первому блоку
btnAdd.addEventListener('click', createSection);
btnDelete.addEventListener('click', () => removeSection(section));

btnFirst.addEventListener('click', () => {
  input.value = '';
  placeholder.remove();
  img.remove();
  document.body.append(section);
})