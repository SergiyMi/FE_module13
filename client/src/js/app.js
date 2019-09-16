import { refreshList } from './mvc/view';
import { notepad } from './mvc/model';

import './utils/libraries';

notepad.get().then(data => (refreshList(data)));
