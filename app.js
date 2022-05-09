// impossible button
//const btn=document.querySelector('#clicker')
//btn.addEventListener('mouseover',function(){
  //  console.log("you clicked me");
    //const height=Math.floor(Math.random() * window.innerHeight);
    //const width=Math.floor(Math.random() * window.innerWidth);
    //btn.style.top=`${height}px`
    //btn.style.left=`${width}px`
//})
//btn.addEventListener('click',function(){
  //  btn.innerText='congratulations';
    //document.body.style.backgroundColor='green'
//})
/*events on multiple elements
const container=document.querySelector('#boxes')
const colors=['red','blue','green','yellow','brown','black']
for(let color of colors){
 const box=document.createElement('div');
 box.style.backgroundColor=color;
 container.appendChild(box);
 box.classList.add('box');
 box.addEventListener('click', function(){
   console.log(`you clicked ${color}`)
 })
}*/
//event object
/*document.body.addEventListener('keypress', function(e){
  console.log(e);
});
const pumm=document.querySelector('#username')
pumm.addEventListener('keydown', function(e){
  console.log('keydown');
});*/
//code to get what a user typed in the input box once the key enter is hit.it gives you the list of what the user typed.
/*const ite=document.querySelector('#item')
const added=document.querySelector('#add')
ite.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    const vee=this.value;
    const newItem=document.createElement('li');
    newItem.innerText=vee;
    added.appendChild(newItem);
    this.value='';
  }
})*/
/*const form=document.querySelector('#signup')
const card=document.querySelector('#cc');
const box=document.querySelector('#cb');
const take=document.querySelector('#pick')*/
/*form.addEventListener('submit', function(e){
  alert("submitted the form");
  console.log( card.value);
  console.log('cb', box.checked);
  console.log('pick', take.value);
  e.preventDefault();
})*/
/*formData={}
card.addEventListener('input', (e)=>{
  console.log('it is changed', e)
  formData['nner']=e.target.value;
})*/

/*const formData={};
for(let inputt of [card, box, take]){
  inputt.addEventListener('input', ({target})=>{
    const{name,type,value,checked}=target;
    formData[name] =type === 'checkbox'? checked : value;
  });
}*/

/*const repeat = (str,times) => {
  let result= '';
  for(let i=0; i < times; i++){
    result += str;
  }
  return result;
};
const scream=(str) =>{
  return str.toUpperCase() + '!!!';
};
const getRantText = (phrase) =>{
  let text= scream(phrase);
  let rant = repeat(text,8);
  return rant;
};
const makeRant = (phrase, el) =>{
  const h1=document.createElement('h1');
  h1.innerText=getRantText(phrase);
  el.appendChild(h1);
};

makeRant ('leave now', document.body);*/
/*console.log('i am first');
setTimeout(() => {
  console.log('im last');
},3000)
console.log('i came second');*/
/*callback
const btn=document.querySelector('#clicker')
setTimeout(function() {
  btn.style.transform = `translateX(100px)`;
  setTimeout(() =>{
    btn.style.transform= `translateX(200px)`;
    setTimeout(function(){
      btn.style.transform = `translateX(300px)`
      setTimeout(function(){
        btn.style.transform = `translateX(400px)`
       },1000);
    },1000);
  },1000);
}, 1000);*/
/*const btn=document.querySelector('#clicker')
const moveX = (element, amount, delay) =>{
  setTimeout(() =>{
    element.style.transform = `translateX(${amount}px)`;
  },delay);
};
moveX(btn, 600,2000);*/

/*const goo = (element, amount, delay, callback) =>{
  const bodyBoundary = document.body.clientWidth;
  element.getBoundingClientRect();
  setTimeout(() =>{
    element.style.transform = `translate(${amount}px)`;
    if (callback) callback();
  },delay);
};
goo(btn,100,1000,() =>{
  goo(btn,200,1000,() =>{
    goo(btn,300,1000,() =>{
      goo(btn,600,1000,() =>{
      })
    })
  })
})*/


/*const goo = (element, amount, delay,callback) =>{
  const bodyBoundary= document.body.clientWidth;
  const curLeft=element.getBoundingClientRect().left;
  const curRight=element.getBoundingClientRect().right;
  if(curRight + amount > bodyBoundary){
    console.log('done,cannot go that far');
  }
  setTimeout(()=>{
    element.style.transform = `translateX(${curLeft + amount}px)`;
    if(callback) callback();
  }, delay);
};
goo(btn,100,1000,()=>{
  goo(btn,100,1000,()=>{
    goo(btn,100,1000,()=>{
      goo(btn,100,1000,()=>{
        goo(btn,100,1000);
      });
    });
  });
});*/



/*const doings = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const rand=Math.random();
      if(rand<0.5){
        reject();
      }else{
        resolve()
      }
    },1000)
  })
}
doings()
.then(()=>{
  console.log('success')
})
.catch(()=>{
  console.log('failed');
})*/

/*const fakeRequest = (url) => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      const rand = Math.random();
      if (rand <0.4){
        reject({status:404});
      }else{
        const grue = {
          '/details': [
            {id: 1, username:'mama'},
            {id:2, username:'papa'}
          ],
          '/about' : 'this is the about page'
        }
        const peru = grue[url];
        resolve({status:200, peru});
      }
    },1000)
  })
}
fakeRequest('/about').then((res)=>{
  console.log('res.status', res.status)
  console.log('res. peru', res. peru)
  console.log(" you made it")
})
.catch((res)=>{
  console.log(res.status)
  console.log("try again")
})*/
const fakeRequest = (url) => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        const grue = {
          '/details': [
            {id: 1, username:'mama'},
            {id:2, username:'papa'}
          ],
          '/about' : 'this is the about page'
        }
        const peru = grue[url];
        if(peru){
        resolve({status:200, peru});
        }else{
          reject({status:404});
        }
    },1000)
  })
}
fakeRequest('/details').then((res)=>{
  console.log('res.status', res.status)
  console.log('res. peru', res. peru)
  console.log(" you made it")
})
.catch((res)=>{
  console.log(res.status)
  console.log("try again")
})
fakeRequest('/dog').then((res)=>{
  console.log('res.status', res.status)
  console.log('res. peru', res. peru)
  console.log(" you made it")
})
.catch((res)=>{
  console.log(res.status)
  console.log("try again")
})

/*const fakeRequest = (url) => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        const pages = {
          '/users': [
            {id: 1, username:'mama'},
            {id:7, username:'papa'}
          ],
          '/user/1':{
      
          }
          '/about' : 'this is the about page'
        }
        const peru = grue[url];
        if(peru){
        resolve({status:200, peru});
        }else{
          reject({status:404});
        }
    },1000)
  })
}*/





























