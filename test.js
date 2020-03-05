var dataSet = {'que':['What','When','Where','How','Why','Who','Wow'],
               'ben':['1','2','3','4'],
               'live':['1','2','3','4','5','6','7'],
                }

var answerSet = {'que':{'What': '1','When': '2','Where': '3',},
                'ben':['1','2','3','4'],
                'live':['1','2','3','4','5','6','7'],
                }

function shuffle(array1){
    var ctr = array1.length
    var temp1,temp2, index
    while (ctr > 0){
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp1 = array1[ctr];
        //temp2 = array2[ctr];
        array1[ctr] = array1[index]
        //array2[ctr] = array2[index]
        array1[index] = temp1;
        //array2[index] = temp2;
    }
    return array1
}

function sort(array){

}

function myRoot(){
    var opt = document.getElementById('root');
    var optIndex = opt.options[opt.selectedIndex].value;
    var SelectedQuestionList = dataSet[optIndex];
    //console.log(SelectedQuestionList)

    if(SelectedQuestionList.length < 8){
        let removeLen = 8 - SelectedQuestionList.length
        //console.log(removeLen)
        for(let j=0 ; j<removeLen; j++){
            let rqid = ('#q'+[`${8-j}`]);
            let rtid = ('#i'+[`${8-j}`]);
            var qelem = document.querySelector(rqid);
            qelem.style.display = 'none';
            var ielem = document.querySelector(rtid);
            ielem.style.display = 'none';

        }
    }
    console.log('-------------------')
    console.log(shuffle(SelectedQuestionList))
    
    for(let i=0;i<SelectedQuestionList.length;i++){
        //console.log(SelectedQuestionList[i]);
        let sid = ('#q'+[`${i+1}`]);
        //console.log(sid);
        document.querySelector(sid).textContent = SelectedQuestionList[i];
    }

    event.preventDefault()
}

function myFun(){
    event.preventDefault()
    var opt = document.getElementById('root');
    var optIndex = opt.options[opt.selectedIndex].value;
    var SelectedQuestionList = dataSet[optIndex];
    var SelectedAnswerList = answerSet[optIndex];
    console.log(SelectedAnswerList)
    console.log(document.querySelector('#i1'))
    var ans = []
    var qus = []
    for(let i=0;i<SelectedQuestionList.length;i++){
        let aid = ('i'+[`${i+1}`]);
        let qid = ('#q'+[`${i+1}`]);
        qus[i] = document.querySelector(qid).textContent
        ans[i] = document.getElementById(aid).value
    }
    //var unpackList = 
    console.log(ans)
    console.log(qus)
}





function Reset(){
    window.location.reload();    
}