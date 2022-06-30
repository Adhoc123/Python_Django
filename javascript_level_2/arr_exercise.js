var roaster = []
function addNew()
{
    var newName = prompt('what name you would you like to add?');
    roaster.push(newName);
}

function remove()
{
    var remName = prompt('what name would you like to remove?');
    var index = roaster.indexOf(remName);
    roaster.splice(index,1);
}

function display()
{
    console.log(roaster);
}

var start = prompt('Would you like to start the roaster web app?y/n');
var req = 'empty';
if(start==='y')
{
    while(req!=='quit')
    {
        var func = prompt('Please selec an option add, remove, display or quit');
        if(func=='add')
        {
            addNew();
        }
        else if(func=='remove')
        {
            remove();
        }
        else if(func=='display')
        {
            display();
        }
        else
        {
            req = 'quit';
        }

    }
}
else alert('Refresh and provide y');