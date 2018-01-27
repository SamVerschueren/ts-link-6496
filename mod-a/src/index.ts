import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {unicorn, unicorn$} from 'mod-b';

console.log(`Unicorn ${unicorn}`);

unicorn$.pipe(map(() => 'rainbow')).subscribe(result => {
	console.log(`Unicorn$ ${result}`);
});
