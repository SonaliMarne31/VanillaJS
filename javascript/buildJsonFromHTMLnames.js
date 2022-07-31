const names = [
    ['foo.bar'],
    ['foo.bar.baz'],
    ['fizz']
];

let getJson = (elements) => {
    let finalObj = {};

    for(let i=0; i< elements.length; i++){
        let element_name = elements[i][0]; //.getAttribute("name");
        if(element_name.length>0){
            let root_obj = finalObj;
            let temp = root_obj;
            let name_list = element_name.split(".");

            for(let j = 0; j < name_list.length ; j++){ 
                if(!(name_list[j] in temp)){
                    temp[name_list[j]] = {};
                }
                temp = temp[name_list[j]];
            }            
            finalObj = Object.assign(finalObj,root_obj);
        }
    }
  return finalObj;
}

let obj = getJson(names);
console.log(obj);
