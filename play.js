var person = {
  "name": "victoria",
  "getFullName" : function(){
    return this.name
  },
  "state":"canada",
  "isFromState" : function (state){
    if (state == this.state)
      return true
    return false
  }

}

console.log(person.getFullName());
