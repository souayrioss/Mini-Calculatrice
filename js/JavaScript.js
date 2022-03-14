
        let tabOperation = [];
        let input = 0;
        function inputNumeric(arg){
            if ( document.getElementById("outPut").innerHTML ===  "!!!!!!!!!!!!!!!!!!!!" || (document.getElementById("outPut").innerHTML == "0" && arg != "."))
            { document.getElementById("outPut").innerHTML = ""; }
            if ((arg !== ".") || !input.match(/[.]/)) {
            input += arg;
            document.getElementById("outPut").innerHTML += arg;}
        }
        function inputOperator(opr){
            if (input !== 0 && input !== "-" ) {
                input = parseFloat(input);
                addToTable(input);
                addToTable(opr);

                document.getElementById("outPut").innerHTML +=opr;
                input = 0;
            }
            if (opr == "-"  && isNaN(tabOperation[0]) && input !== "-")
            {input ="-";
                document.getElementById("outPut").innerHTML = "-";
            }
            
            
        }
        function clearAll() {
            tabOperation = [];
            input = 0;
            document.getElementById("outPut").innerHTML = "0";
        }
        function addToTable(input){
            tabOperation.push(input);
            console.log(tabOperation)
        }
        function calculateQueue(value){
            if (input !==0) {
            input = parseFloat(input);
            addToTable(input);
                            }
            let preVal = value[0];
            let divByZero = 0;
            for (  let i = 2; i < value.length; i= i+2) {
                switch (tabOperation[i-1]) {
                    case '+':
                        preVal+= value[i];
                        break;
                    case '-':
                        preVal-= value[i];
                        break;
                    case '/':    if (value[i] === 0)   divByZero = 1;
                            else      preVal = preVal / value[i];
                        break;
                    case'*': preVal *= value[i];
                        break;
                        case'^': preVal = Math.pow(preVal, value[i]) ;
                        break;
                        case'%': preVal %= value[i] ;
                        break;
                        case'√' : preVal = Math.sqrt(value[i]) ;
                        break;
                }
            }
            preVal = preVal.toFixed(5);
            preVal = parseFloat(preVal);
            if ( divByZero === 1) { clearAll();
                document.getElementById("outPut").innerHTML =  "!!!!!!!!!!!!!!!!!!!!";}
            else
            {document.getElementById("outPut").innerHTML =  preVal ;
                input = outPut;
            tabOperation = [];}
        }
        
        
        