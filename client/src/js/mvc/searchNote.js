import { notepad } from "./model";
import { refreshList } from "./view";

function searchNote(event) {
    event.preventDefault();
    const { target } = event;
    const searchItems = notepad.filterNotesByQuery(target.value);
    console.table(searchItems);
    refreshList(searchItems);
}

export default searchNote;