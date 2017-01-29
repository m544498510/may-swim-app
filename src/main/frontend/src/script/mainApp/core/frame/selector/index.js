/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

export function getFrame(state) {
  return state.frame;
}

export function getSidebarState(state) {
  return getFrame(state).get('sidebarState');
}

export function getHtmlSize(state){
  const frame = getFrame(state);
  const width = frame.get('htmlWidth');
  const height = frame.get('htmlHeight');
  return {
    width, height
  };
}
