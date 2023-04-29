function route(method, path, handler) {
  if (!valid(path)) {
    //console.warn(`Warning: invalid router "$(path)"`);
    return this;
  }
  return
}

function valid(path) {
  var pathList = path.split("/"),
      questMarked,   //REST param matches a path or nothing (Marking: ":name?")
      paramsMarked,  //REST params                          (Marking: ":name ")
      starred,       //REST param matches any more path     (Marking: ":*    ")
      result = true;

  pathList.forEach(path => {
    if (!(/^[A-Za-z_\-0-9:](\* | ([A-Za-z0-9\-_]*\??))$/.test(path))) {
      result = false
    } else if (/^\:/.test(path)) {
      if (/^\/.+/)
        result = false;

      paramsMarked = true;

      if(starred || questMarked)
        result = false; //No params after star param and question param

      if (/^\:\*/.test(path))
        starred = true;
      if (/\?$/.test(path))
        questMarked = true;

    } else if (paramsMarked) {
      result = false;
    }
  });

  return result;
}

export default route;
