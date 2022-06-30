var ham = 1;
var cheese = 10;
var report = 'blank'
if(ham>=10 && cheese>=10)
{
    report='Strong sales of both ham and cheese';
}
else if(ham===0 && cheese===0)
{
    report='Nothing sold';
}
else{
    report='We had items to sold';
}
alert(report)