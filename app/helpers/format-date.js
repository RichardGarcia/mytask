import { helper } from '@ember/component/helper';

export function formatDate(params) {
  return moment(params[0]).format('DD MMM YYYY');
}

export default helper(formatDate);
