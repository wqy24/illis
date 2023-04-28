function route(method, path, handler) {
  if (!valid(path)) {
    console.warn(`Warning: invalid router "$(path)"`);
    return this;
  }
}

function valid(path) {
  var pathList = path.split("/"),
      varsMarked, //REST params (Marking: a ":" in front of the name)
      starred;    //star param  (Marking: ":*") Note: matches all bytes

  pathList.forEach(path => {
    if (/^\:/.test(path)) {
      varsMarked = true;

      if(starred)
        return false; //No params after star param

      if (/^\:\*/.test(path)) {

        //Star param should not have another bytes after "*"
        if (/^\:\*$/.test(path))
          starred = true;
        else
          return false;
      }

    } else if (varsMarked) {
      return false;
    }
  });

  return true;
}

export default route;
