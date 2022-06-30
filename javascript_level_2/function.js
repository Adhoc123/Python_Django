function fname(name='jost',num)
{
    return name+' '+num*4;
}

var str = 'hello global';
var str1 = 'Second global';

function fun(str1)
{
    console.log(str);
    str1 = 'HUrr';
    console.log(str1);

}

fun('josh')
console.log(str1);