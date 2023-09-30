export const deviationLabel = (val) => {
  if (val === 0) {
    return {
      label: 'On-time',
      status: 'success',
    };
  } else if (val > 0) {
    return {
      label: 'Early',
      status: 'error',
    };
  } else if (val === null) {
    return {
      label: 'Unknown',
      status: 'default',
    };
  } else {
    return {
      label: 'Late',
      status: 'info',
    };
  }
};

export const highlightSubString = (str, s, e) => {
  if (str === 'UNKNOWN') {
    return str;
  }
  if (s === undefined) {
    s = 0;
  }
  if (e === undefined) {
    e = str.length - 1;
  }
  const temp = str.substr(s, e);
  const a = str.replace(temp, `<span class='highlight'>${temp}</span>`);
  return a;
};
