function Show(){
    var a="a is a local variable of outer function"
    console.log(a)
    function innerFunc(){
        var b="b is a local variable of inner function"
        console.log(a)
        console.log(b)
    }innerFunc()
}
Show()

function fardeen(){
    var c="c is a local variable of outer fuction"
    console.log(c)
    function innerfunc(){
        var d="d is local variable of inner function"
        console.log(d)
        console.log(c)
    }innerfunc()
}fardeen()          

function nadeem(){
    var e="e is outer function variable"
    function  innerFunc(){
        var d="d is inner funtion variable "
        console.log(d)
        console.log(e)
    }innerFunc()
}nadeem()
