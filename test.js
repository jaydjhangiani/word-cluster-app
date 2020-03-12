var dataSet = {'fore':['Predict','Prevent','Give Advanced Warning','Ancestor','One Who Comes Before',],
               'voro':['Delicasy','Meat-Eating Creature','Enjoy a Meal','Eat Greedily','Extremely Hungry','Eating Vegetables'],
               'log':['Informal Conversation','Indirect/Roundabout Statement','Speach Made To Oneself','Public Criticism','Talkative','Ability TO Speak Well',],
               'vox':['Support/Speak In Favor Of','Take Back a Law or Privilege','To Call Forth Or Pray','Intend To Anger or Upset Someone','Mislead/Use Ambiguous Language'],
                }

var answerSet = {'fore':{'Predict':'FORTELL','Prevent':'FORESTALL','Give Advanced Warning':'FOREWARN','Ancestor':'FOREFATHER','One Who Comes Before':'FORERUNNER',},
                 'voro':{'Delicasy':'SAVORY','Meat-Eating Creature':'CARNIVORE','Enjoy a Meal':'SAVOR','Eat Greedily':'DEVOUR','Extremely Hungry':'VORACIOUS','Eating Vegetables':'HERBIBVORE',},
                 'log':{'Informal Conversation':'COLLOQUIAL','Indirect/Roundabout Statement':'CIRCUMLOCUTION','Speach Made To Oneself':'SOLILOQUY','Public Criticism':'OBLOQUY','Talkative':'LOQUACIOUS','Ability TO Speak Well':'ELLOQUENT'},
                 'vox':{'Support/Speak In Favor Of':'ADVOCATE','Take Back a Law or Privilege':'REVOKE','To Call Forth Or Pray':'INVOKE','Intend To Anger or Upset Someone':'PROVOKE','Mislead/Use Ambiguous Language':'EQUIVOCATE',},
                }

function shuffle(array1){
    var ctr = array1.length
    var temp1,temp2, index
    while (ctr > 0){
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp1 = array1[ctr];
        array1[ctr] = array1[index]
        array1[index] = temp1;
        }
    return array1
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
	console.log(SelectedQuestionList)
    var SelectedAnswerList = answerSet[optIndex];
    console.log(SelectedAnswerList)
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
	for(let i=0;i<SelectedQuestionList.length;i++){
	let q = qus[i]
	let a = ans[i].toUpperCase()
	let t = ('i'+[`${i+1}`]);
	if (a === SelectedAnswerList[q])
	{	
		console.log(q+" "+a+" true")
		document.getElementById(t).classList.add('right')
	}
	else{
		document.getElementById(t).classList.add('wrong')	
	}
}
}

function Reset(){
    window.location.reload();    
}