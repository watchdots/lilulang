declare {
    start();
    myType;
    fatherType;
    int a = 3;
}

type fatherType{
    float b = 3.3;
    (int a) = function add(float c){
    }    
}

type myType : fatherType{
   int a = 2;
}

function start() {}