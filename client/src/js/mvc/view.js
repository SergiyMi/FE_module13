import template from '../templates/note.hbs';  // импортируем новый темплейт
import refs from '../utils/refs';
import deleteNote from './deleteNote';
import editNote from './editNote';
import addNote from './addNote';
import { openEditor } from '../utils/libraries';
import addNotePriority from './addNotePriority';
import removeNotePriority from './removeNotePriority';
import searchNote from './searchNote';

const refreshList = notes => {
    const htmlNotesList = notes.map(note => template(note)).join("\n");  // получаем строку через map
    refs.list.innerHTML = "";
    refs.list.insertAdjacentHTML("afterbegin", htmlNotesList);
};

refs.list.addEventListener('click', editNote);
refs.list.addEventListener('click', deleteNote);
refs.list.addEventListener('click', addNotePriority);
refs.list.addEventListener('click', removeNotePriority);
refs.search.addEventListener('input', searchNote);
refs.openEditor.addEventListener('click', openEditor);
refs.form.addEventListener('click', addNote);

export { refreshList };