var list = document.getElementById('list')
function addtodo(){
    var todoitem = document.getElementById('todo-items')
    var li = document.createElement('li')
    var litxt = document.createTextNode(todoitem.value)
li.appendChild(litxt)
list.appendChild(li)
todoitem.value= ""

var delbut = document.createElement('button')
var deltext = document.createTextNode('DELET')
delbut.appendChild(deltext)
delbut.setAttribute("class","btn")
delbut.setAttribute("onclick","dellitems(this)")
var edibtn = document.createElement('button')
var edittext = document.createTextNode('Edit')

edibtn.setAttribute("onclick","eitem(this)")
edibtn.appendChild(edittext)
edibtn.setAttribute("class","btn")
li.appendChild( delbut)
li.appendChild(edibtn)

}
function dellitems(e){
 e.parentNode.remove()
}
 function dltbtn(){
    list.innerHTML = ""
 } 
function eitem(s){
     var va2 =prompt("enter edit value",s.parentNode.firstChild.nodeValue)
      var val = (s.parentNode.firstChild.nodeValue)
    //  console.log()
    s.parentNode.firstChild.nodeValue= va2 
   console.log(s.parentNode.firstChild)
//  s.parentNode.firstChild.NodeValue= edival
}
