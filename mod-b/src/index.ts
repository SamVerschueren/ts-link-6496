import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {map, filter} from 'rxjs/operators';

/**
 * A regular unicorn
 */
export const unicorn = '🦄';

/**
 * An observable unicorn
 */
export const unicorn$ = of(unicorn).pipe(
	map(() => 'unicorn'),
	filter(() => true)
);
