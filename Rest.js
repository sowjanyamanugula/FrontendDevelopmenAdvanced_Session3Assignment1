//First Task
function getArrLength(...x){
  return x.length;
}

getArrLength(21, 12, 33, 45);



function multiplyByTwo(mul,...x){
   return x.map((n)=>{
  return mul*n;
  });
}

multiplyByTwo(2, 12, 3 ,4);




function sortRestArgs(...x){
   return x.sort();
}

sortRestArgs(4,1,7,2);



//Second task
var apiDetail={baseUrl:'', method:'', requestParam:'' ,header:'', data:''};

function makeAjaxRequest ({baseUrl, method, requestParam,header, data}) {
    console.log(baseUrl, method,requestParam,header,data);
}

makeAjaxRequest({baseUrl: "www.acadgild.com", method:  "post", requestParam:"abc",header:"my first header",data:"successfull"})