function something(ind,oper){
    var val1=10; val2=90;
    return oper[ind](val1,val2);
    }
    function add(a,b){
    return a+b;
    }
    function sub(a,b){
    return a-b;
    }
    function mul(a,b){
    return a*b;
    }
    let oper =[add,sub,mul];
    www=something(0,oper);
    console.log(www);
    www1=something(1,oper);
    console.log(www1);
    www2=something(2,oper);
    console.log(www2);
    