const UtilTool = {
  deepCopy: (pre) => {
    let ch = pre.constructor === Array ? [] : {};
    if(typeof pre !== 'object'){
      ch = pre;
    }
    else if(window.JSON){
      ch = JSON.parse(JSON.stringify(pre))
    }
    else{
      for(var i in pre){
        ch[i] = typeof pre[i] === 'object' ?
          (pre[i].constructor === Array ? pre[i].slice() : deepCopy(pre[i]))
          : pre[i]
      }
    }
    return ch;
  },
  stringifyQuery:(query)=>{
    let opts = {}
    for(let i in query){
      let _opt = query[i]
      if(Object.prototype.toString.call(_opt) === '[object Array]'){
        if(_opt.length){
          opts[i] =  _opt.length == 1 ? _opt.join('Asp,Asp')+'Asp,Asp' : _opt.join('Asp,Asp')
        }
      } else if(_opt){
        opts[i] =  _opt
      }
    }
    return opts
  },
  parseQuery:(query)=>{
    let queryParams = {}
    for(let i in query){
      let _opt = query[i]
      if(_opt){
        queryParams[i] = (_opt+'').indexOf('Asp,Asp') > -1 ? (_opt+'').split('Asp,Asp').filter((item)=>item) : _opt
      }
    }
    return queryParams
  },
  parseCheck:(query)=>{
    let queryParams = {}
    for(let i in query){
      if(query[i].regType){
        queryParams[query[i].key] = query[i].regType
      }
    }
    return queryParams
  },
  paramsAssign:(query,params,defParams)=>{
    let _params = Object.assign({},params)
    const _paramsKey = Object.keys(_params)
    for(let i in query){
      if(_paramsKey.indexOf(i) > -1){
        _params[i] = query[i]
      }
    }
    if(defParams){
      _params = Object.assign({},_params,defParams)
    }
    return _params
  },
  getFileImage:(src)=>{
    return new Promise((resolve,reject) => {
      var image = new Image();
      image.onload = function(){
        const width = image.width
        const height = image.height
        resolve({width,height})
      }
      image.onerror = function(err){
        reject(err)
      }
      image.src = src;
    })
  },
  getFileReaderImage:(file)=>{
    return new Promise((resolve,reject)=> {
      var fr = new FileReader();
      fr.onload = async function(_file) {
        try{
          const imageWh =  await UtilTool.getFileImage(_file.target.result)
          const size = file.size
          const type = file.type
          resolve({...imageWh,size,type})
        } catch (err) {
          reject(err)
        }


        // var image = new Image();
        // image.onload = function(){
        //   const width = image.width
        //   const height = image.height
        //   const size = file.size
        //   const type = file.type
        //   resolve({width,height,size,type})
        // }
        // image.onerror = function(err){
        //   reject(err)
        // }
        // image.src = _file.target.result;

      }
      fr.onerror = function(err){
        reject(err)
      }
      fr.readAsDataURL(file);
    })
  }

}
const RegExpType = {
  Num: /^[1-9]{1}[0-9]*$/g,
  Price: /^[0-9]{1}[0-9]*(\.[0-9]{1,2})?$/g,
  Qq: /^\d{6,}$/g,
  Tel:/^1(3|4|5|7|8)\d{9}$/g,
  Email:/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g
}
window.UtilTool = UtilTool
window.RegExpType = RegExpType
